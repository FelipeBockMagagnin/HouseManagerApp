import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableHighlight } from 'react-native'

import { GetShoppings } from '../../services/shoppingService'

import Header from '../../components/Header'
import styles from './styles'

export default function Shopping ({ navigation }) {
  
  const colors = ['red', 'blue', 'black'];
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(GetShoppings())
  }, [])

  function Item ({ item }) {
    return (
      <TouchableHighlight 
        style={styles.block}        
        onPress={() => alert('Removendo item')} underlayColor="white"
      >
          <Text>{item.name}</Text>
      </TouchableHighlight>      
    )
  }

  return (
    <View>
      <Header title='Compras' navigation={navigation}></Header>

      <SafeAreaView style={{ marginBottom: 150 }}>
        <FlatList
          data={items}
          renderItem={Item}
          keyExtractor={(item) => item.index} numColumns={4}
        />
      </SafeAreaView>
    </View>
  )
}
