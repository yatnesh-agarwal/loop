import { Image, Pressable, Text, View } from 'react-native';
// import '../global.css';
import {Circle} from "lucide-react-native"
import { useState } from 'react';
const OnboardingPage1 = ({onNext}) => {
    const [isNewUser, setIsNewUser] = useState("");
    const handleNewUser = () => {
        setIsNewUser(true)
    }
  return (
    
    <View 
    className = "flex-1 bg-black"
    >
        
        <View
        className="flex-1  items-center justify-center">
            

        <View className="relative w-72 h-64 mt-20 ml-12 top-10">
            <Image
            source={{
                uri: 'https://i.pinimg.com/736x/13/e1/1d/13e11d3a49c4d75ac8174c86426c4947.jpg',
            }}
            className="absolute w-28 h-56 border border-white/30 rounded-2xl rotate-[-12deg] z-20 left bottom-16"
            />
            <Image
            source={{
                uri: 'https://i.pinimg.com/736x/fb/18/80/fb1880846a4ce0b2908a3c4d94b77bc2.jpg',
            }}
            className="absolute w-28 h-56 rounded-2xl border border-white/30 left-20 bottom-16 rotate-12 z-30"
            />
            <Image
            source={{
                uri: 'https://i.pinimg.com/736x/45/4e/6f/454e6f4bc4a0af6935c0aff25ce054d4.jpg',
            }}
            className="absolute w-28 h-56 rounded-2xl border border-white/30 rotate-[12deg] right-4  top-8"
            />
            <Image
            source={{
                uri: 'https://i.pinimg.com/736x/70/4a/0b/704a0b1aee6170375de420d891fbbb7b.jpg',
            }}
            className="absolute w-24 h-56 rounded-2xl border border-white/30 -rotate-12 top-8 right-60"
            />

        </View>

        <View className="items-center px-6 mt-8 top-10">

            <Text className="text-4xl font-semibold text-white text-center">
            Watch. Hire.{'\n'}
            Get it done.
            </Text>

            <Text className="text-gray-500 text-center mt-8 text-xl">
            Discover talent, post tasks, do work and{'\n'}
            earn - all in one place
            </Text>

        </View>

        <View className="flex flex-row gap-4 mt-10 top-5">
            <Circle 
            color="white" 
            fill="white" 
            size={12}
            />
            <Circle 
            color="grey" 
            fill="grey" 
            size={12}
            />
            <Circle 
            color="grey" 
            fill="grey" 
            size={12}
            />
        </View>

        <Pressable
        onPress={onNext}
        >
            <Text
            className = "text-black text-center bg-white rounded-full mt-12 text-lg font-bold py-4 px-32"
            >
            Get Started
            </Text>
        </Pressable>

        <View>
            <Text
            className="text-gray-500 font-semibold top-12 text-lg"
            >
            Already have an account? 
            <Text
            className = "text-white font-bold"
            >
            {" "}Sign In
            </Text>
            </Text>
        </View>

        </View>
    </View>
  );
};

export default OnboardingPage1;