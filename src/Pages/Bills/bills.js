import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Bills ({ navigation }) {
  return (
    <View>
      <Header title='Bills' navigation={navigation}></Header>
      <Text>List of bills</Text>
    </View>
  )
}
