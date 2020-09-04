import axios from 'axios'
import config from './service.json'

const url = config.apiUrl

export function GetTodoList () {
  return axios.get(url + 'todolist')
}

export function CreateTodo (title) {
  return axios.post(url + 'todolist', {
    title: title,
    name: 'name',
    description: 'description'
  })
}

export function DeleteTodo (id) {
  return axios.delete(url + 'todolist/' + id)
}
