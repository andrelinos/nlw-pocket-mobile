import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    gap: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalAddress: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    minWidth: 200,
    height: 36,
    backgroundColor: colors.green[500],
    borderColor: colors.green[500],
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray[100],
    fontFamily: fontFamily.regular,
  },
})
