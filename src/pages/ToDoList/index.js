import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Modal, SafeAreaView, FlatList } from 'react-native'
import { List, Button, TextInput, Surface, RadioButton } from 'react-native-paper'

import { GetTodoList, CreateTodo, DeleteTodo } from '../../services/todolistService'

import Header from '../../components/Header'
import styles from './styles'
import { Feather } from '@expo/vector-icons'

export default function Todolist ({ navigation }) {
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    GetTodoList().then(response => {
      console.log('response', response)
      setItems(response.data)
    }).catch(error => {
      console.log('error', (error))
    })
  }, [])

  return (
    <View>
      <Header title='Tarefas' navigation={navigation} />

      <AddTodoModal/>

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
        <Feather name="plus" size={30} color="#00c853" />
      </TouchableOpacity>
    </View>
  )

  function AddTodoModal () {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              label="Title"
              value={title} mode='outlined'
              onChangeText={text => setTitle(text)}
              style={{ width: 300 }}
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
          </View>
        </View>

      </Modal>
    )
  }

  function TodoItem ({ item }) {
    return (
      <Surface key={item.id} style={styles.todo}>
        <List.Item
          title={item.title} titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          left={props => <RadioButton status={item.check === true ? 'checked' : 'unchecked'} color={'#00e676'} />}
          right={ () => {
            return <TouchableOpacity onPress={() => DeleteTodoList(item.id)} >
              <Feather
                name="x-circle"
                size={26}
                color="red" style={{ marginTop: 3 }} />
            </TouchableOpacity>
          }}
        />
      </Surface>
    )
  }

  function DeleteTodoList (id) {
    DeleteTodo(id).then(delResponse => {
      GetTodoList().then(response => {
        setItems(response.data)
      }).catch(error => {
        console.log(error)
      })
    })
  }
}
