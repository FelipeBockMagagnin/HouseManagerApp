import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.icons}>
        <Ionicons name="md-person" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    height: Constants.statusBarHeight + 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#00e676'
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: 'black'
  },
  icons: {
    position: 'absolute',
    left: 16,
    top: 35
  }
})

export default Header
