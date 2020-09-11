import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

import { GetShoppings } from '../../services/shoppingService'

import Header from '../../components/Header'
import styles from './styles'

export default function Shopping ({ navigation }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(GetShoppings())
  }, [])

  function Item ({ item }) {
    return (
      <View style={styles.block}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <View>
      <Header title='Shopping' navigation={navigation}></Header>

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
