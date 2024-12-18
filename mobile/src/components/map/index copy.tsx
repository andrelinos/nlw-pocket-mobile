import type { PlaceProps } from '@/components/place'
import { IconCurrentLocation } from '@tabler/icons-react-native'
import { useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { s } from './styles'

export type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

const initialCurrentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

type Props = {
  markets: MarketsProps[]
  currentLocationPin: typeof initialCurrentLocation
  getCurrentLocation: () => Promise<void>
}

export function MapComponent({
  markets,
  currentLocationPin,
  getCurrentLocation,
}: Props) {
  const mapRef = useRef<MapView>(null)

  return (
    <View style={{ flex: 1, backgroundColor: '#CECECE' }}>
      <MapView
        ref={mapRef}
        // onRegionChangeComplete={location => setCurrentLocation(location)}
        // onRegionChange={location => setCurrentLocationPin(location)}
        initialRegion={initialCurrentLocation}
        style={{ flex: 1 }}
      >
        <Marker
          identifier="current"
          coordinate={currentLocationPin}
          title="Localização"
          image={require('@/assets/location.png')}
        />

        {markets.map(market => (
          <Marker
            key={market.id}
            identifier={market.id}
            coordinate={{
              latitude: market.latitude,
              longitude: market.longitude,
            }}
            title={market.name}
            image={require('@/assets/pin.png')}
          >
            <Callout>
              <View>
                <Text style={s.name}>{market.name}</Text>
                <Text style={s.address}>{market.address}</Text>
                <Text style={s.phone}>{market.phone}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 296,
          right: 16,
          width: 24,
          height: 24,
          zIndex: 999,
        }}
        onPress={getCurrentLocation}
      >
        <IconCurrentLocation size={32} color="blue" strokeWidth={1} />
      </TouchableOpacity>
    </View>
  )
}
