import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlassView } from 'expo-glass-effect'

const TabBar = () => {
    const [topBarSelected, setTopBarSelected] = React.useState(1);
    const translateX = React.useRef(new Animated.Value(0)).current
    const [tabWidth, setTabWidth] = React.useState(0);
    const handleBtnPress = (idx) =>{
        setTopBarSelected(idx)

        Animated.spring(translateX,{
            toValue : (idx - 1) * tabWidth ,
            useNativeDriver: true,
            tension : 80,
            friction: 10,
        }).start()

    }
  return (
    <View
    className = 'h-16 mt-2'
    >
        <View
        className="relative flex-row h-16 rounded-full bg-white/20 rounded-full"
        onLayout={(event) => {
            setTabWidth(event.nativeEvent.layout.width / 4)
        }}
        >
            <Animated.View
            pointerEvents = "none"
            className = "absolute left-0 top-0 bottom-0 w-1/4 rounded-full"
            style={{
                transform: [{ translateX }]
            }}>
             <GlassView
             glassEffectStyle = "regular"
             isInteractive
             tintColor='white'
                style={{
                flex: 1,
                borderRadius: 999,
                zIndex: 1
                }}
            />
            </Animated.View>
            <Pressable
            onPress={()=>handleBtnPress(1)}
            style={{ zIndex: 2 }}
            className="flex-1 h-16 items-center justify-center"
            >
                <Text
                className = {`${topBarSelected == 1 ? "text-black" : "text-white"} text-xl font-bold`}
                >
                    For You
                </Text>
            </Pressable>


            <Pressable
            onPress={()=>handleBtnPress(2)}
            style={{ zIndex: 2 }}
            className="flex-1 h-16 items-center justify-center"
            >
                <Text
                className = {`${topBarSelected == 2 ? "text-black" : "text-white"} text-xl font-bold`}
                >
                    Following
                </Text>
            </Pressable>


            <Pressable
            onPress={()=>handleBtnPress(3)}
            style={{ zIndex: 2 }}
            className="flex-1 h-16 items-center justify-center"
            >
                <Text
                className = {`${topBarSelected == 3 ? "text-black" : "text-white"} text-xl font-bold`}
                >
                    Work
                </Text>
            </Pressable>


            <Pressable
            onPress={()=>handleBtnPress(4)}
            style={{ zIndex: 2 }}
            className="flex-1 h-16 items-center justify-center"
            >
                <Text
                className = {`${topBarSelected == 4 ? "text-black" : "text-white"} text-xl font-bold`}
                >
                    All
                </Text>
            </Pressable>
            

        </View>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({})