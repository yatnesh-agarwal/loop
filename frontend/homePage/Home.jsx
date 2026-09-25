import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import TabBar from './TabBar'
import ReelFeed from './ReelFeed'
import NavBar from './NavBar'

const Home = () => {
  return (
    <View
    className = "w-full h-full bg-black"
    >
      <Header />
      <TabBar />
      <ReelFeed />
      <NavBar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})