import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  databaseURL: 'https://HouseManager.firebaseio.com',
  projectId: 'housemanager-d343c',
  appId: '1:496207766849:android:092a6a56c1f4cf47912dc0'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
