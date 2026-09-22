import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Eye, EyeClosed, Lock, Mail, TreeDeciduous, User } from 'lucide-react-native'

const OnboardingPage2 = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [name, setName] = useState("");
    const [isVerifyPressed, setIsVerifyPressed] = useState(false);
    const [userEnteredOTP, setUserEnteredOTP] = React.useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailVerified, setIsEmailVerified] = React.useState(false);
    const handleVerifyEmail = async () =>{
        const success = await sendOTP()
        if (success){
            setIsVerifyPressed(true)
        }
    }
    const handleNameInput = (e) => {
        setName(e)
    }
    const handleEmailInput = (e) => {
        setEmailId(e)
    }
    const handlePasswordInput = (e) => {
        setPassword(e)
    }
    const viewPass = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const sendOTP = async () => {
        try{
            const response = await fetch("http://10.2.16.34:3000/api/sendOTP",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email : emailId
                })
            })
            const data = await response.json()
             if (response.ok) {
                alert("OTP sent successfully!")
                return true
            }

            alert(data.message || "Failed to send OTP")
            return false

            
        }
        catch(err){
            console.log(`Error while sending OTP ${err}`)
        }
    }

    const verifyOTP = async () => {
        try{
            const response = await fetch("http://10.2.16.34:3000/api/verifyOTP",{
                method : "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    otp : userEnteredOTP
                })
            })
            const data = await response.json()
             if (response.ok) {
                setIsEmailVerified(true)
                alert("OTP verified successfully!")
                console.log("OTP Verified")
            } else {
                alert(data.message || "Invalid OTP")
            }

        }
        catch(err){
            console.log(`Error while verifying OTP: ${err}`)
        }
    }

    const handleOTPInput = (e) =>{
        setUserEnteredOTP(e)
    }
  return (
    <View
    className = "flex-1 bg-black gap-4 justify-center items-center"
    >
        <Text
        className = "text-white font-semibold text-3xl"
        >   
        Create your account
        </Text>
        <Text
        className = "text-gray-400 top-4"
        >
            Join a community of builders, creators{"\n"} and doers.
        </Text>

        <View 
        className = "flex flex-col gap-2 bottom-6"
        >
            {/* full name */}
            
            <View 
            className = "top-16 items-center flex flex-row gap-4 h-16 w-96 border px-4 border-white/20 rounded-3xl"
            >
                <User 
                color="#808080"
                className=''
                />
                <TextInput
                value = {name}
                onChangeText = {handleNameInput}
                keyboardType = "default"
                className = "flex-1 text-white rounded-2xl"
                placeholder = "Full Name"
                placeholderTextColor="#808080"
                />
            </View>

            {/* email address */}


            <View className="top-16 flex-row items-center h-16 w-96 border px-4 border-white/20 rounded-3xl">
                {!isVerifyPressed ? (
                    <>
                    <Mail color="#808080" />

                    <TextInput
                        value={emailId}
                        onChangeText={handleEmailInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        className="flex-1 text-white ml-4"
                        placeholder="Email Address"
                        placeholderTextColor="#808080"
                    />

                    <Pressable onPress={handleVerifyEmail}>
                        <Text className="text-green-500 font-bold">
                        Send OTP
                        </Text>
                    </Pressable>
                    </>
                ) : (
                    <>
                    <Text className="text-white font-semibold">
                        OTP:
                    </Text>

                    <TextInput
                        value={userEnteredOTP}
                        disabled = {isEmailVerified}
                        onChangeText={handleOTPInput}
                        keyboardType="number-pad"
                        maxLength={4}
                        className="flex-1 text-white ml-3"
                        placeholder="__  __  __  __"
                        placeholderTextColor="#808080"
                    />

                    <Pressable
                    onPress = {verifyOTP}
                    disabled = {isEmailVerified}
                    e>
                        <Text className="text-green-500 font-bold">
                        {isEmailVerified ? "Verified" : "Verify"}
                        </Text>
                    </Pressable>
                    </>
                )}
                </View>

            {/* password */}

            <View 
            className = "top-16 items-center flex flex-row gap-4 h-16 w-96 border px-4 border-white/20 rounded-3xl"
            >
                <Lock 
                color="#808080"
                className=''
                />
                <TextInput
                value = {password}
                onChangeText = {handlePasswordInput}
                secureTextEntry = {!isPasswordVisible}
                className = "flex-1 text-white rounded-2xl"
                placeholder = "Password"
                placeholderTextColor="#808080"
                />
                {isPasswordVisible ? (
                    <Eye 
                onPress={viewPass}
                color="#808080"
                className=''
                />
                ) : 
                <EyeClosed 
                onPress={viewPass}
                color="#808080"
                className=''
                />
                }
                
                
            </View>
        </View>

        <Pressable
        className='text-black bg-white w-96 h-14 mt-16 rounded-3xl justify-center items-center flex'
        >
           <Text
           className = "text-black font-bold text-lg"
           >
            Create Account
           </Text>
        </Pressable>

        <Text
        className = "text-gray-400 text-center mt-10 mr-8"
        >
            ------------------or continue with------------------
        </Text>

        <View
        className = "flex flex-row gap-32"
        >
             <Image
                source = {{
                    uri : "https://imgs.search.brave.com/98IafawRcuxVK9qZKVXFbKX-9V0C3kbuVdDNncx_bTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2Uvc3ZnLWdv/b2dsZS1sb2dvLXZl/Y3Rvci0xMy5wbmc"
                }} 
                className = "h-12 w-12 top-10"
                />
            
            <Image
                source = {{
                    uri : "https://imgs.search.brave.com/0s75nzOF7Ld22AzUnTUFoimL6aM46zjIH4uGWqVwlxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFwcGxlLWljb24t/c3ZnLWRvd25sb2Fk/LXBuZy0yMjY0MzUu/cG5nP2Y9d2VicCZ3/PTEyOA"
                }} 
                className = "h-12 w-12 top-10"
                />
            
            <Image
                source = {{
                    uri : "https://imgs.search.brave.com/aMU_L-9PwOVyhlt4NyE2kzxJgUF0kPftc3jLe73l7IE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9waG9uZS1p/Y29uLXN2Zy1kb3du/bG9hZC1wbmctMTc0/MTIwMy5wbmc_Zj13/ZWJwJnc9MTI4"
                }} 
                className = "h-12 w-12 top-10"
                />

        </View>

        <View
        className = ""
        > 
            <Text
            className = "text-gray-400 text-center top-40"
            >
                By contine you agree to our {"\n"} Terms of Service and Privacy Policy
            </Text>
        </View>
        
    </View>
  )
}

export default OnboardingPage2

const styles = StyleSheet.create({})