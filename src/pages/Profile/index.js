import React, { useEffect, useState } from 'react'
import { AsyncStorage, Text, View, Image, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import { Button } from 'react-native-paper'

export default function Profile ({ navigation, route }) {
  const [user, setUser] = useState()

  useEffect(() => {
    AsyncStorage.getItem('user').then((item) => {
      console.log('user', item)
      const _user = JSON.parse(item)
      setUser(_user)
    })
  }, [])

  return (
    <View>
      <Header title='Profile' navigation={navigation}></Header>
      {user ? <User user={user} /> : null}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
        <Button mode="contained" onPress={() => { navigation.navigate('Login') }} style={{ width: 100 }}>Sair</Button>
      </View>
    </View>
  )
}

function User ({ user }) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
        <Image
          source={{
            uri: user.photoUrl
          }}
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View>
          <Text style={styles.title}> {user.name}</Text>
          <Text style={styles.caption}>{user.email}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500'
  }
})
