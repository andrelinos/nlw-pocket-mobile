export function formatPhoneNumber(phoneNumber: string) {
  try {
    const cleaned = `${phoneNumber}`.replace(/\D/g, '')

    const match = cleaned.match(/^(\d{2})(\d{8,9})$/)

    if (match) {
      const intlCode = '55'
      return `${intlCode}${match[1]}${match[2]}`
    }
  } catch (error) {
    return null
  }
}
