import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.icons}>
        <Ionicons name="md-person" size={28} color="white" />
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
    width: '100%',
    height: Constants.statusBarHeight + 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
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
    color: '#fff'
  },
  icons: {
    position: 'absolute',
    left: 16,
    top: 40
  }
})

export default Header
