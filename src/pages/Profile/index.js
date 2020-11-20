import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header'
import { Button } from 'react-native-paper'

export default function Profile ({ navigation, route }) {
  const [user, setUser] = useState()

  useEffect(() => {
    // const { user } = route.params
    console.log('params', route.params)
  }, [])

  return (
    <View>
      <Header title='Profile' navigation={navigation}></Header>
      <Text>Profile</Text>
      <Button onPress={() => { navigation.navigate('Login') }}>Sair</Button>
    </View>
  )
}
