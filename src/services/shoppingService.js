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
    },
    {
      index: 21,
      name: 'leite'
    },
    {
      index: 22,
      name: 'laranja'
    },
    {
      index: 23,
      name: 'pao'
    },
    {
      index: 24,
      name: 'maça'
    },
    {
      index: 25,
      name: 'laranja'
    },
    {
      index: 26,
      name: 'limao'
    },
    {
      index: 27,
      name: 'limao'
    },
    {
      index: 28,
      name: 'queijo'
    },
    {
      index: 29,
      name: 'banana'
    },
    {
      index: 30,
      name: 'cha'
    },
    {
      index: 31,
      name: 'presunto'
    },
    {
      index: 32,
      name: 'presunto'
    },
    {
      index: 33,
      name: 'presunto'
    },
    {
      index: 34,
      name: 'maça'
    },
    {
      index: 35,
      name: 'cha'
    },
    {
      index: 36,
      name: 'maça'
    },
    {
      index: 37,
      name: 'cha'
    },
    {
      index: 38,
      name: 'laranja'
    },
    {
      index: 39,
      name: 'presunto'
    },
    {
      index: 40,
      name: 'pao'
    },
    {
      index: 41,
      name: 'leite'
    },
    {
      index: 42,
      name: 'laranja'
    },
    {
      index: 43,
      name: 'laranja'
    },
    {
      index: 44,
      name: 'queijo'
    },
    {
      index: 45,
      name: 'maça'
    },
    {
      index: 46,
      name: 'maça'
    },
    {
      index: 47,
      name: 'banana'
    },
    {
      index: 48,
      name: 'banana'
    },
    {
      index: 49,
      name: 'cha'
    },
    {
      index: 50,
      name: 'queijo'
    },
    {
      index: 51,
      name: 'laranja'
    },
    {
      index: 52,
      name: 'queijo'
    },
    {
      index: 53,
      name: 'pao'
    },
    {
      index: 54,
      name: 'cha'
    },
    {
      index: 55,
      name: 'leite'
    },
    {
      index: 56,
      name: 'queijo'
    },
    {
      index: 57,
      name: 'cha'
    },
    {
      index: 58,
      name: 'presunto'
    },
    {
      index: 59,
      name: 'leite'
    },
    {
      index: 60,
      name: 'limao'
    },
    {
      index: 61,
      name: 'laranja'
    },
    {
      index: 62,
      name: 'presunto'
    },
    {
      index: 63,
      name: 'laranja'
    },
    {
      index: 64,
      name: 'maça'
    },
    {
      index: 65,
      name: 'presunto'
    },
    {
      index: 66,
      name: 'presunto'
    },
    {
      index: 67,
      name: 'limao'
    },
    {
      index: 68,
      name: 'leite'
    },
    {
      index: 69,
      name: 'limao'
    },
    {
      index: 70,
      name: 'banana'
    },
    {
      index: 71,
      name: 'presunto'
    },
    {
      index: 72,
      name: 'laranja'
    },
    {
      index: 73,
      name: 'pao'
    },
    {
      index: 74,
      name: 'queijo'
    },
    {
      index: 75,
      name: 'pao'
    },
    {
      index: 76,
      name: 'laranja'
    },
    {
      index: 77,
      name: 'laranja'
    },
    {
      index: 78,
      name: 'maça'
    }
  ]
  return data
}
