import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Profile ({ navigation }) {
  return (
    <View>
      <Header title='Profile' navigation={navigation}></Header>
      <Text>Profile</Text>
    </View>
  )
}
