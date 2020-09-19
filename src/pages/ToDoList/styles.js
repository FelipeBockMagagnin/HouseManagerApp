import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  todoContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white'
  },
  todo: {
    margin: 5,
    elevation: 4,
    borderRadius: 10
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 30,
    top: 30,
    right: 10,
    backgroundColor: 'black',
    width: 35,
    height: 35
  }
})
