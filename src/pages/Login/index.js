import React, { useState, useEffect } from 'react'
import { Text, Button, View, Image } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { SocialIcon } from 'react-native-elements'

export default function Login ({ navigation }) {
  const [user, setUser] = useState(null)

  function signOutAsync () {
    setUser(null)
  }

  function signInAsync () {
    Google.logInAsync({
      androidClientId: '496207766849-c39hv9vl15nh0o85k243e5cggft3sgm0.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    }).then(({ type, accessToken, user }) => {
      console.log(type)
      console.log(accessToken)
      console.log(user)
      console.log('chegou aqui')
      if (type === 'success') {
        setUser(user)

        // Then you can use the Google REST API
        console.log('sucess')
      }
    }).catch(err => {
      console.log(err)
    })
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
      {user
        ? <View>
          <Text>Usuario Logado: </Text>
          <Text>Email: { user.email }</Text>
          <Text>Name: { user.givenName } {user.familyName}</Text>
          <Image style={{
            width: 50,
            height: 50
          }} source={{
            uri: user.photoUrl
          }} />
        </View> : null}
      <SocialIcon
        title={user ? 'Deslogar' : 'Login com Google'}
        button={true}
        type={'google'}
        onPress={() => signIn()}
      />
    </View>
  )
}
