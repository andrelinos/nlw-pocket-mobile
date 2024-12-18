import { IconTicket } from '@tabler/icons-react-native'
import {
  Image,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native'

import { colors } from '@/styles/theme'
import { s } from './styles'

export type PlaceProps = {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
  phone: string
  categoryId: string
}

type Props = TouchableOpacityProps & {
  data: PlaceProps
}

export function Place({ data, ...props }: Props) {
  return (
    <TouchableOpacity style={s.container} {...props}>
      <Image style={s.image} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description} numberOfLines={2}>
          {data.description}
        </Text>

        <View style={s.footer}>
          <IconTicket size={16} color={colors.red[500]} />
          <Text style={s.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
