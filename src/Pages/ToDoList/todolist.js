import React, { useState } from 'react'
import { Text, Button, View, Modal, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import Header from '../../Components/Header/header'

export default function Todolist ({ navigation }) {
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDate, setNewDate] = useState('')

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
                setItems([...items, { id: Date.now(), name: newName, creationDate: newDate }])
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

      <View style={{ display: 'flex', paddingHorizontal: 10 }}>
        <View>
          {items.map(item => {
            return (
              <View key={item.id} style={{ margin: 10, borderWidth: 2, padding: 10 }}>
                <Text>Nome: {item.name}</Text>
                <Text>Data: {item.creationDate}</Text>
                <Button
                  onPress={() => {
                    const itemsCopy = [...items]
                    const removeIndex = itemsCopy.map(function (itemMap) { return itemMap.id }).indexOf(item.id)
                    itemsCopy.splice(removeIndex, 1)
                    setItems(itemsCopy)
                  }}
                  title='remove'/>
              </View>
            )
          })}
        </View>

        <Button title='add' onPress={() => { setModalVisible(true) }}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15
  },
  input: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 200,
    borderColor: '#333',
    borderWidth: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginTop: 15,
    textAlign: 'center'
  }
})
