import { View } from 'react-native'

import { Button } from '@/components/button'
import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'
import { type Href, router } from 'expo-router'

export default function Index() {
  function handleNavigate(route: Href) {
    router.navigate(route)
  }

  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steps />
      <Button onPress={() => handleNavigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}
