import axios from 'axios'
import config from './service.json'

const url = config.apiUrl

export function GetShoppings () {
  const data = [
    {
      index: 0,
      name: 'limao'
    },
    {
      index: 1,
      name: 'banana'
    },
    {
      index: 2,
      name: 'banana'
    },
    {
      index: 3,
      name: 'presunto'
    },
    {
      index: 4,
      name: 'leite'
    },
    {
      index: 5,
      name: 'maça'
    },
    {
      index: 6,
      name: 'presunto'
    },
    {
      index: 7,
      name: 'presunto'
    },
    {
      index: 8,
      name: 'limao'
    },
    {
      index: 9,
      name: 'banana'
    },
    {
      index: 10,
      name: 'cha'
    },
    {
      index: 11,
      name: 'cha'
    },
    {
      index: 12,
      name: 'limao'
    },
    {
      index: 13,
      name: 'limao'
    },
    {
      index: 14,
      name: 'pao'
    },
    {
      index: 15,
      name: 'limao'
    },
    {
      index: 16,
      name: 'queijo'
    },
    {
      index: 17,
      name: 'laranja'
    },
    {
      index: 18,
      name: 'queijo'
    },
    {
      index: 19,
      name: 'maça'
    },
    {
      index: 20,
      name: 'banana'
    }
  ]
  return data
}
