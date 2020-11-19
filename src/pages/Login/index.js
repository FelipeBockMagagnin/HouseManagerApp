import React, { useState, useEffect } from 'react'
import { Text, Button, View } from 'react-native'
import * as Google from 'expo-google-app-auth'

export default function Login ({ navigation }) {
  const [user, setUser] = useState()

  useEffect(() => {
    Google.logInAsync({
      androidClientId: '496207766849-c39hv9vl15nh0o85k243e5cggft3sgm0.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    }).then(({ type, accessToken, user }) => {
      if (type === 'success') {
        // Then you can use the Google REST API
        console.log('sucess')
      }
    })
  }, [])

  function signOutAsync () {

  }

  function signInAsync () {

  }

  function signIn () {
    if (user) {
      console.log('deslogando')
      signOutAsync()
    } else {
      console.log('logando')
      signInAsync()
    }
  }

  return (
    <View>
      <Text>Login com Google</Text>
      <Button title='Logar Com Google' onPress={ () => signIn() }/>
    </View>
  )
}
