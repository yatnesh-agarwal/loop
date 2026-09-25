import "./global.css"
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OnboardingPage1 from 'Onboarding/OnboardingPage1'
import OnboardingPage2 from 'Onboarding/OnboardingPage2'
import Home from './homePage/Home'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)

  if (currentPage == 1){
    return (
      <View className = "w-full h-full">
        <OnboardingPage1 onNext = {()=>setCurrentPage(2)} />
      </View>
    )
  }
  if (currentPage == 2){
    return (
      <View className = "w-full h-full">
        <OnboardingPage2 onNext = {()=>setCurrentPage(3)} />
      </View>
    )
  }

  if (currentPage == 3){
    return (
      <View className = "w-full h-full">
        <Home />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({})