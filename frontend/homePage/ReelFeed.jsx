import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ellipsis, Heart, MessageCircle, Share } from 'lucide-react-native'

const ReelFeed = () => {
  return (
    <View
    className = "w-full h-full items-center flex pt-4 relative"
    >
        <View
        className = "w-[90%] h-[72%] bg-white/20 rounded-3xl justify-end"
        >
            <View
            className = "flex flex-col gap-6 pr-4 mb-[20px] items-end"
            >
                <View
                className = "flex flex-col gap-4 items-center"
                >
                    <Heart
                    fill={"white"}
                    color={"white"}
                    size={36}
                    />
                    <Text
                    className = "text-white/70 text-lg"
                    >
                        1.2k
                    </Text>
                </View>
               <View
               className = "flex flex-col gap-4 items-center"
               >
                    <MessageCircle
                    color={"white"}
                    size={36}
                    />
                    <Text
                    className = "text-white/70 text-lg"
                    >
                    1.2k
                    </Text>
               </View>
                <View
                className = "flex flex-col gap-4 items-center"
                >
                    <Share
                    color={"white"}
                    size={36}
                    />
                    <Text
                    className = "text-white/70 text-lg"
                    >
                    1.2k
                    </Text>
                </View>
                <Ellipsis
                color={"white"}
                size={36}
                />
            </View>

            {/* user name and follow btn */}
            <View
            className = "pl-4 flex flex-row gap-2 mb-4 items-center"
            >
                <View
                className = "h-12 w-12 rounded-full bg-white/50"
                >
                    
                </View>
                <View
                className = "flex-1 flex-row relative justify-between items-center "
                >
                    <View 
                    className = "flex flex-col gap-0 pl-2"
                    >
                        <Text
                        className = "text-white text-2xl font-semibold"
                        >
                            Yatnesh Agarwal
                        </Text>
                        <Text
                        className = "text-white/50 text-lg font-semibold"
                        >
                            Video Editor
                        </Text>
                    </View>

                    {/* follow btn */}
                    <View
                    className = "border border-white/60 rounded-full h-12 px-8 mr-4 justify-center items-center flex"
                    >
                        <Text
                        className = "text-white text-lg text-center"
                        >
                            Follow
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    </View>
  )
}

export default ReelFeed

const styles = StyleSheet.create({})