import React from 'react'
import { View, AsyncStorage } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { SocialIcon } from 'react-native-elements'

export default function Login ({ navigation }) {
  function signInAsync () {
    Google.logInAsync({
      androidClientId: '496207766849-c39hv9vl15nh0o85k243e5cggft3sgm0.apps.googleusercontent.com'
    }).then(({ type, accessToken, user }) => {
      console.log(user)
      if (type === 'success') {
        AsyncStorage.setItem('user', JSON.stringify(user)).then(() => {
          navigation.navigate('Home')
        })
      }
    })
  }

  return (
    <View>
      <SocialIcon
        title={'Login com Google'}
        button={true}
        type={'google'}
        onPress={() => signInAsync()}
      />
    </View>
  )
}
