import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import { GetTodoList } from '../../services/todolistService'
import { Card, Paragraph, Avatar } from 'react-native-paper'

export default function Home ({ navigation }) {
  const [todo, setTodo] = useState()

  useEffect(() => {
    GetTodoList().then(response => {
      console.log(todo)
      console.log('resposta:', JSON.stringify(response))
      setTodo(response.data)
    }).catch(error => {
      console.log(todo)

      console.log('Error', JSON.stringify(error))
    })
  }, [])

  if (todo === undefined) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' style={{ transform: [{ scale: 2 }] }} color="#00ff00" />
      </View>
    )
  }

  const LeftContent = props => <Avatar.Icon {...props} icon="format-list-bulleted-square" />

  return (
    <View>
      <Header title='Início' navigation={navigation}></Header>

      <ScrollView>
        <Card style={{ padding: 10, margin: 10 }} >
          <Card.Title title="Tarefas" left={LeftContent} />
          <Card.Content>
            <Paragraph>Numero de tarefas a fazer: {todo.length}</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ padding: 10, margin: 10 }} >
          <Card.Title title="Compras" left={LeftContent} />
          <Card.Content>
            <Paragraph>a fazer</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ padding: 10, margin: 10 }} >
          <Card.Title title="Contas" left={LeftContent} />
          <Card.Content>
            <Paragraph>a fazer</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ padding: 10, margin: 10, marginBottom: 100 }} >
          <Card.Title title="Reformas" left={LeftContent} />
          <Card.Content>
            <Paragraph>a fazer</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
