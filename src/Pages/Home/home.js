import React from 'react'
import { Text, Button, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Home ({ navigation }) {
  return (
    <View>
      <Header title='Home' navigation={navigation}></Header>
    </View>
  )
}
