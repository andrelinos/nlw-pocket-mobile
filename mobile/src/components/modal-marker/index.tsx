import { formatPhoneNumber } from '@/utils/formatters'
import {
  IconBrandWhatsapp,
  IconInfoCircle,
  IconPhone,
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { Alert, Linking, Modal, Pressable, Text, View } from 'react-native'
import type { PlaceProps } from '../place'
import { s } from './styles'

type Props = {
  selectedMarket: PlaceProps | null
  setSelectedMarket: (market: PlaceProps | null) => void
}

export function ModalMarker({ selectedMarket, setSelectedMarket }: Props) {
  async function handleCallPhone() {
    try {
      if (!selectedMarket?.phone) {
        return
      }

      const { phone } = selectedMarket
      setSelectedMarket(null)
      await Linking.openURL(`tel:${phone}`)
    } catch (error) {
      console.error('Error call phone:', error)
    }
  }

  async function handleCallWhatsapp() {
    try {
      if (!selectedMarket?.phone) {
        return
      }

      const formattedPhone = formatPhoneNumber(selectedMarket.phone)
      if (!formattedPhone) {
        Alert.alert('Erro', 'Número de telefone inválido.')
        return
      }

      setSelectedMarket(null)

      const url = `whatsapp://send?phone=${formattedPhone}`
      const supported = await Linking.canOpenURL(url)

      if (supported) {
        await Linking.openURL(url)
      } else {
        router.navigate(`https://api.whatsapp.com/send?phone=${formattedPhone}`)
      }
    } catch (error) {
      console.error('Error call Whatsapp:', error)
    }
  }

  async function handleNavigateToDetails() {
    if (!selectedMarket?.phone) {
      return
    }

    router.navigate(`/market/${selectedMarket.id}`)
  }

  return (
    <Modal
      visible={!!selectedMarket}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setSelectedMarket(null)}
    >
      <View style={s.modalContainer}>
        <View style={s.modalContent}>
          <Text style={s.modalTitle}>{selectedMarket?.name}</Text>
          <Text style={s.modalAddress}>{selectedMarket?.address}</Text>

          <Pressable onPress={handleCallPhone} style={[s.button]}>
            <IconPhone color="white" />
            <Text style={[s.buttonText, {}]}>{selectedMarket?.phone}</Text>
          </Pressable>

          <Pressable onPress={handleCallWhatsapp} style={s.button}>
            <IconBrandWhatsapp color="white" />
            <Text style={[s.buttonText]}>Falar no Whatsapp</Text>
          </Pressable>

          <Pressable onPress={handleNavigateToDetails} style={[s.button]}>
            <IconInfoCircle color="white" />
            <Text style={[s.buttonText]}>Veja mais detalhes</Text>
          </Pressable>

          <Pressable
            onPress={() => setSelectedMarket(null)}
            style={[s.button, { marginTop: 24 }]}
          >
            <Text style={s.buttonText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
