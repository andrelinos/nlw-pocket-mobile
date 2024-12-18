import type { PlaceProps } from '@/components/place'
import { colors } from '@/styles/colors'
import { IconCurrentLocation } from '@tabler/icons-react-native'
import { useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { ModalMarker } from '../modal-marker'
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
  currentLocation: typeof initialCurrentLocation
  getCurrentLocation: () => Promise<void>
}

export function MapComponent({
  markets,
  currentLocationPin,
  currentLocation,
  getCurrentLocation,
}: Props) {
  const mapRef = useRef<MapView>(null)
  const [selectedMarket, setSelectedMarket] = useState<MarketsProps | null>(
    null
  )

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
          coordinate={currentLocation}
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
            onPress={() => setSelectedMarket(market)}
            image={require('@/assets/pin.png')}
          >
            {/* Ignored, with problem version 0.52 */}
            {/* <Callout tooltip>
              <View style={{ width: 200, height: 100, padding: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14 }}>{item.address}</Text>
              </View>
                </Callout> */}
          </Marker>
        ))}
      </MapView>

      <ModalMarker
        selectedMarket={selectedMarket}
        setSelectedMarket={() => setSelectedMarket(null)}
      />

      <TouchableOpacity
        style={s.buttonCurrentLocation}
        onPress={getCurrentLocation}
      >
        <IconCurrentLocation
          size={32}
          color={colors.blue[500]}
          strokeWidth={1}
        />
      </TouchableOpacity>
    </View>
  )
}
