import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import Header from '../../Components/Header/header'

export default function Todolist ({ navigation }) {
  const [items, setItems] = useState([])

  return (
    <View>
      <Header title='Todolist' navigation={navigation}></Header>

      <View style={{ display: 'flex', paddingHorizontal: 10 }}>
        <View>
          {items.map(item => {
            return (
              <View key={item.id} style={{ margin: 10, borderWidth: 2, padding: 10 }}>
                <Text>{item.name}</Text>
                <Text>{item.creationDate}</Text>
              </View>
            )
          })}
        </View>

        <Button title='add' onPress={() => { setItems([...items, { id: 1, name: 'tarefa', creationDate: new Date().toLocaleString() }]) }}></Button>
        <Button title='clear' onPress={() => { setItems([]) }}></Button>
      </View>
    </View>
  )
}
