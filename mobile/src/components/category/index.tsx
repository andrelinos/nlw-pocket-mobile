import { Pressable, type PressableProps, Text } from 'react-native'

import { colors } from '@/styles/colors'
import { categoriesIcons } from '@/utils/categories-icons'
import { s } from './styles'

type CategoryProps = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({
  iconId,
  name,
  isSelected = false,
  ...props
}: CategoryProps) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...props}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>
  )
}
