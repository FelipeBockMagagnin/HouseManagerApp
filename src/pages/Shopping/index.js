import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import Header from '../../components/Header/header'
import { GetShoppings } from '../../services/shoppingService'

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
          keyExtractor={(item) => item.id} numColumns={4}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
