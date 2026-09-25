import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Home, Notebook, Play, Plus, User } from 'lucide-react-native'

const NavBar = () => {
    const isBtnPressed = () =>{
        
    }
  return (
    <View
    className = "absolute inset-0 justify-end items-center"
    >
        <View
        className = "h-[65px] w-full justify-end items-end bg-white/20"
        >
            <View
            className = "flex-1 flex-row gap-14 mr-8 justify-center items-center"
            >
                <Home
                size={35} 
                color={"white"}
                />
                <View
                className = "h-10 w-10 -mr-2 border border-white rounded-xl items-center justify-center flex"
                >
                    <Play
                    color={"white"}
                    />
                </View>
                <Plus
                size={35} 
                color={"white"}
                />
                <Notebook
                size={35} 
                color={"white"}
                />
                <User
                size={35} 
                color={"white"}
                />
            </View>
        </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({})