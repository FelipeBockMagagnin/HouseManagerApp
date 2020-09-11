import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import { GetTodoList } from '../../services/todolistService'
import { Card, Paragraph, Avatar } from 'react-native-paper'

export default function Home ({ navigation }) {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    GetTodoList().then(response => {
      setTodo(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const LeftContent = props => <Avatar.Icon {...props} icon="format-list-bulleted-square" />

  return (
    <View>
      <Header title='Tarefas' navigation={navigation}></Header>

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
