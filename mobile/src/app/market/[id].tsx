import { CameraView, useCameraPermissions } from 'expo-camera'
import { Redirect, router, useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Alert, Modal, ScrollView, StatusBar, View } from 'react-native'

import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import type { MarketsProps } from '@/components/map'
import { Coupon, Cover, Details, s } from '@/components/market'
import { api } from '@/services/api'

type DataProps = MarketsProps & {
  rules: {
    id: string
    description: string
  }[]
}

export default function Market() {
  const qrLock = useRef(false)

  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [couponIsFetching, setCouponIsFetching] = useState(false)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)

  const [_, requestPermission] = useCameraPermissions()
  const params = useLocalSearchParams<{ id: string }>()

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      Alert.alert('Erro', 'Não foi possível carregar os dados', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ])
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert('Câmera', 'Você precisa permitir o uso da câmera')
      }

      qrLock.current = false
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível utilizar a câmera')
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true)

      const { data } = await api.patch(`/coupons/${id}`)

      Alert.alert('Cupom', data.coupon)
      setCoupon(data.coupon)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível utilizar o cupom')
    } finally {
      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false)

    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        { text: 'Sim', onPress: () => getCoupon(id) },
      ]
    )
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon])

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <Redirect href="/home" />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code x</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        />

        <View style={s.buttonCameraContainer}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  )
}
