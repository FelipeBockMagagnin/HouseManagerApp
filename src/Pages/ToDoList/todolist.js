import React from 'react'
import { Text, Button, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Todolist ({ navigation }) {
  return (
    <View>
      <Header title='Todolist' navigation={navigation}></Header>
      <Text>Todolist</Text>
    </View>
  )
}
