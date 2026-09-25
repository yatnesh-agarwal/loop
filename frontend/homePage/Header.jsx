import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css"
import { Bell } from 'lucide-react-native'

const Header = () => {
  return (
    <View
    className = "h-36 pl-8 pt-20"
    >
      <View
      className = "flex flex-row justify-between items-center"
      >
        <Text
        className = "text-white text-5xl font-bold "
        >loop.</Text>n
        <View
        className = "mr-8 flex flex-row relative"
        >
          <Bell
          color={"white"}
          size={"26px"}
          />
          <View
          className = "h-1 w-1 -right-1 rounded-full bg-red-500 absolute"
          ></View>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})