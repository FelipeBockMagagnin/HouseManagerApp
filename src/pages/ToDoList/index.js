import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native'
import Header from '../../components/Header/header'
import { GetTodoList, CreateTodo, DeleteTodo } from '../../services/todolistService'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { List, Checkbox, Button, TextInput, Modal, Portal } from 'react-native-paper'

export default function Todolist ({ navigation }) {
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    GetTodoList().then(response => {
      setItems(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  function TodoItem ({ item }) {
    return (
      <View key={item.id}>
        <List.Item
          title={item.title} titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          left={props => <Checkbox status={'checked'} color={'#000'} />}
          right={ () => {
            return <TouchableOpacity onPress={() => {
              DeleteTodo(item.id).then(delResponse => {
                GetTodoList().then(response => {
                  setItems(response.data)
                }).catch(error => {
                  console.log(error)
                })
              })
              const itemsCopy = [...items]
              const removeIndex = itemsCopy.map(function (itemMap) { return itemMap.id }).indexOf(item.id)
              itemsCopy.splice(removeIndex, 1)
              setItems(itemsCopy)
            }}>
              <Feather
                name="x-circle"
                size={26}
                color="red" style={{ marginTop: 3 }} />
            </TouchableOpacity>
          }}
        />

      </View>
    )
  }

  return (
    <View>
      <Header title='Todolist' navigation={navigation} />

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => {
            setModalVisible(!modalVisible)
          }} contentContainerStyle={
            {
              paddingVertical: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
              margin: 10,
              backgroundColor: 'white'
            }}>
          <TextInput
            label="Title"
            value={title}
            mode="outlined"
            onChangeText={text => setTitle(text)}
          />

          <Button mode="contained" style={{ marginTop: 30 }}
            onPress={() => {
              CreateTodo(title).then(response => {
                setTitle('')
                setModalVisible(!modalVisible)
                GetTodoList().then(response => {
                  setItems(response.data)
                }).catch(error => {
                  console.log(error)
                })
              }).catch(error => {
                console.log(error)
              })
            }}>
              Adicionar
          </Button>
        </Modal>
      </Portal>

      {items.length === 0
        ? <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700', marginTop: 30 }}>Nenhuma tarefa</Text>
        : <View style={{ marginBottom: 40 }}>
          <SafeAreaView>
            <FlatList
              data={items}
              renderItem={TodoItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => { setModalVisible(true) }}
      >
        <Feather name="plus" size={30} color="#00e676" />
      </TouchableOpacity>
    </View>
  )
}
