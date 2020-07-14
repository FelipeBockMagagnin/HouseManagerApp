import axios from 'axios'

export function GetTodoList () {
  return axios.get('http://10.0.0.104:3333/todolist')
}
