import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const DrawerComponent = (props) => {
    return (


        <DrawerContentScrollView style={tailwind`bg-white`}>
            <View style={tailwind`bg-primary items-center`}>
                <View style={tailwind`flex-row`}>
                    {/* <View style={tailwind`items-start w-2/4`}><Text style={tailwind`text-lg text-white font-bold`}>X</Text></View>                     */}
                    <Image style={tailwind` rounded-20 w-16 h-16`} source ={require('../../assets/logo-white.png')}/>  
                </View>  
            </View>
            <View style={tailwind`bg-white flex flex-row p-4 drop-shadow-lg  border-gray-100 border-t-0 border-r-0  border-l-0 border-b-2`}>                           
                 <Image style={tailwind` rounded-20 w-16 h-16 p-2`} source ={require('../../assets/user.png')}/> 
                <View style={tailwind`flex flex-col p-2`}>
                    <Text style={tailwind`font-bold text-base`}> Eddie Gendraule</Text>
                    <Text style={tailwind`text-xs`}> Mechanic, 41</Text>
                    <View style={tailwind`flex-row`}><Text style={tailwind`text-xs font-bold`}>4.4+</Text><AntDesign name="star" size={12} color="yellow" /><Text style={tailwind`flex-row`}> 30 Clients</Text></View>
                    <Text style={tailwind`text-xs text-red-400`}>Verify</Text>
                 </View>
            </View>
            <View style={tailwind`p-4 bg-white`}>
                <View><Text style={tailwind`font-bold text-lg`}>Settings</Text></View>            
                <DrawerItemList { ...props}/>
            </View>
            <Button title="Logout"></Button>
        </DrawerContentScrollView>

    )
};

export default DrawerComponent;