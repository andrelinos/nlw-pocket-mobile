import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  callout: {},
  container: {},
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  address: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
  },
  buttonCurrentLocation: {
    position: 'absolute',
    bottom: 296,
    right: 16,
    width: 24,
    height: 24,
    zIndex: 999,
  },
  phone: {},
  image: {},
  distance: {},
  actionButton: {},
})
