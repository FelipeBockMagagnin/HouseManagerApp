import React, { useState, useEffect } from 'react'
import { Text, Button, TouchableOpacity, View, CheckBox, Modal, TouchableHighlight, TextInput, SafeAreaView, FlatList } from 'react-native'
import Header from '../../components/Header/header'
import { GetTodoList } from '../../services/todolistService'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

export default function Todolist ({ navigation }) {
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDate, setNewDate] = useState('')

  useEffect(() => {
    GetTodoList().then(response => {
      setItems(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  function RenderItem ({ item }) {
    return (
      <View key={item.id} style={styles.todoContainer}>
        <CheckBox
          color="red"
          checked={false}
          style={{ flex: 1 }}
        />
        <View style={{ flex: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>{item.title}</Text>
        </View>
        <Feather
          name="x-circle"
          size={26}
          color="red"
          style={{ flex: 1 }} onPress={() => {
            const itemsCopy = [...items]
            const removeIndex = itemsCopy.map(function (itemMap) { return itemMap.id }).indexOf(item.id)
            itemsCopy.splice(removeIndex, 1)
            setItems(itemsCopy)
          }} />
      </View>
    )
  }

  return (
    <View>
      <Header title='Todolist' navigation={navigation}></Header>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nome</Text>
            <TextInput style={styles.input} value={newName} onChangeText={ text => setNewName(text) }/>

            <Text style={styles.modalText}>Data</Text>
            <TextInput style={styles.input} value={newDate} onChangeText={ text => setNewDate(text) }/>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setItems([...items, { id: Date.now(), name: newName, date: newDate }])
                setNewName('')
                setNewDate('')
                setModalVisible(!modalVisible)
              }}
            >
              <Text style={styles.textStyle}>ADD</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={{ marginBottom: 40 }}>
        <SafeAreaView>
          <FlatList
            data={items}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          borderRadius: 30,
          top: 30,
          right: 10,
          backgroundColor: '#fff',
          width: 35,
          height: 35
        }} onPress={() => { setModalVisible(true) }}
      >
        <Feather name="plus" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  )
}
