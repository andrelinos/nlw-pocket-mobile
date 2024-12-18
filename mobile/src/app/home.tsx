import { Categories, type CategoryProps } from '@/components/categories'
import { MapComponent } from '@/components/map'
import type { PlaceProps } from '@/components/place'
import { Places } from '@/components/places'
import { api } from '@/services/api'
import axios from 'axios'
import * as Location from 'expo-location'
import { useEffect, useRef, useState } from 'react'
import { Alert, View } from 'react-native'
import type MapView from 'react-native-maps'

type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

const initialCurrentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

export default function Home() {
  const mapRef = useRef<MapView>(null)
  const [categories, setCategories] = useState<CategoryProps[]>(() => [])
  const [category, setCategory] = useState('')
  const [markets, setMarkets] = useState<MarketsProps[]>(() => [])
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)
  const [currentLocationPin, setCurrentLocationPin] = useState(
    initialCurrentLocation
  )

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (granted) {
        const location = await Location.getCurrentPositionAsync()

        console.log('Current Location:', location.coords)

        const updatedLocation = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }

        setCurrentLocationPin(updatedLocation)
        setCurrentLocation(updatedLocation)

        mapRef.current?.animateToRegion(updatedLocation, 1000)
      }
    } catch (error) {
      console.error('Error getting location:', error)
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await api.get('/categories')
        setCategories(data)
        setCategory(data[0].id)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    async function fetchMarkers() {
      if (!category) {
        return
      }

      try {
        console.log('Fetching markers for category:', category)
        const { data } = await api.get(`/markets/category/${category}`)
        console.log('Data fetched successfully')
        setMarkets(data)
      } catch (err) {
        const error = err as any
        if (axios.isCancel(error)) {
          console.error('Request canceled:', error.message)
        } else if (error?.code === 'ECONNABORTED') {
          console.error('Timeout error:', error.message)
          Alert.alert('Locais', 'A solicitação demorou muito para responder.')
        } else {
          console.error('Error fetching markers:', error.message)
          Alert.alert('Locais', 'Não foi possível carregar os locais.')
        }
      }
    }
    fetchMarkers()
  }, [category, currentLocation])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // getCurrentLocation()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#CECECE' }}>
      <Categories
        data={categories}
        selected={category}
        onSelect={setCategory}
      />

      <MapComponent
        markets={markets}
        currentLocationPin={currentLocationPin}
        currentLocation={currentLocation}
        getCurrentLocation={getCurrentLocation}
      />

      <Places data={markets} />
    </View>
  )
}
