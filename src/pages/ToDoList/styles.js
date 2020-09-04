import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15
  },
  input: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 200,
    borderColor: '#333',
    borderWidth: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginTop: 15,
    textAlign: 'center'
  },
  todoContainer: {
    margin: 5,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})
