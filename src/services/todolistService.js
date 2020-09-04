import axios from 'axios'
import config from './service.json'

const url = config.apiUrl

export function GetTodoList () {
  return axios.get(url + 'todolist')
}
