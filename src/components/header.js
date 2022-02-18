import React from "react";
import { View, Image, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import tailwind from 'tailwind-react-native-classnames';
export default function Header({navigation}){

    return(
        <View style={tailwind`flex  bg-primary `}>
            <View style={tailwind`flex-row m-2`}>
            <View style={tailwind`w-10 h-10 w-33`}> 
                <View style={tailwind`bg-white rounded-full w-10 h-10`}>
                    <Image style={tailwind`rounded-20 w-10 h-10`} source ={require('../../assets/wrench.png')}/>                 
                    <View style={tailwind`rounded-full items-end`}>
                        <Text style={tailwind`text-white bg-red-400 text-xs rounded-full`}>10</Text>                
                    </View> 
                </View>               
            </View> 
            <View style={tailwind`items-center  w-33`}>
                    <Image style={tailwind` rounded-20 w-16 h-16`} source ={require('../../assets/logo-white.png')}/> 
            </View>
            <View style={tailwind`items-end  w-33`}>
                <View style={tailwind`w-16 h-16  w-33 drop-shadow-xl `}> 
                    <Image style={tailwind`rounded-20 w-10 h-10`} source ={require('../../assets/user.png')}/> 
                    {/* <Button title="open Menu" /> */}
                </View>
            </View>
            </View>
        </View>
    );
}