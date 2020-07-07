import React from 'react'
import { Text, Button, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Bills ({ navigation }) {
  return (
    <View>
      <Header title='Bills' navigation={navigation}></Header>
    </View>
  )
}
