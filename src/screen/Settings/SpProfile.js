import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { FontAwesome } from '@expo/vector-icons';
import ServicesPanel from '../../panel/ServicesPanel';

const SpProfileScreen = ({navigation}) => {
    return (
        <View style={tailwind`flex  h-full bg-white`}>
            {/* <TouchableOpacity onPress={()=> navigation.goBack()}><Text>Go Back</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}><Text>Open Drawer</Text></TouchableOpacity> */}
            <View style={tailwind`items-center w-full `}>
                <View style={tailwind`flex-row px-8 mx-4 items-center`}>
                    <Image style={tailwind`bg-primary  rounded w-20 h-20 m-2`} source ={require('../../../assets/user.png')}/> 
                    <View style={tailwind`flex-col p-4`}>
                        <Text style={tailwind`font-bold text-lg`}> Eddie Gendraule</Text>
                        <Text style={tailwind`text-gray-400 text-base`}> Mechanic, 41</Text>
                        <Text style={tailwind`text-gray-400 text-sm`}>Davao City, Philippines</Text>
                        <View style={tailwind`flex-row`}>
                        <FontAwesome name="star" color="yellow" /> 
                        <FontAwesome name="star" color="yellow" /> 
                        <FontAwesome name="star" color="yellow" /> 
                        <FontAwesome name="star" color="yellow" /> 
                        <FontAwesome name="star" color="yellow" /> 
                        </View>
                    </View>               
                    
                </View>
            </View>
            
            <View style={tailwind`border-2 mx-4 p-4 border-gray-100 drop-shadow-2xl rounded-2xl`}>
                <View style={tailwind`flex-row`}>
                    <View style={tailwind`w-2/4`}>
                        <Text style={tailwind`text-lg`}> Thu, 09 Arp</Text>
                    </View>
                    <View style={tailwind`w-2/4 items-end`}>
                        <TouchableOpacity style={tailwind`bg-primary p-2 rounded-2xl`}>
                            <Text style={tailwind`text-xs text-white`}>SEE ALL</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
                <Text style={tailwind`m-2 text-gray-400`}> 3 Slots Available</Text>
                
                <View style={tailwind`m-2 flex-row`}>
                    <Text style={tailwind`text-xs border-2 border-gray-50 rounded-2xl p-2 m-1`}>08:00 AM</Text>
                    <Text style={tailwind`text-xs border-2 border-gray-50 rounded-2xl p-2 m-1`}>08:00 AM</Text>
                    <Text style={tailwind`text-xs border-2 border-gray-50 rounded-2xl p-2 m-1`}>08:00 AM</Text>
                    <Text style={tailwind`text-xs border-2 border-gray-50 rounded-2xl p-2 m-1`}>08:00 AM</Text>
                    
                </View>
            </View>
            <View style={tailwind`flex items-center`}>
                <View style={tailwind`flex-row`}>
                    <TouchableOpacity style={tailwind`p-4 mx-4 border-b-2 border-b-primary`}><Text style={tailwind`font-bold text-primary-color text-base`}>Services</Text></TouchableOpacity>
                    <TouchableOpacity style={tailwind`p-4 mx-4 border-b-2 border-gray-50`}><Text style={tailwind`text-base text-gray-400`}>Gallery</Text></TouchableOpacity>
                    <TouchableOpacity style={tailwind`p-4 mx-4 border-b-2 border-gray-50`}><Text style={tailwind`text-base text-gray-400`} >Feedback</Text></TouchableOpacity>
                </View>               
            </View>
            <View style={tailwind`p-4`}>
                <ServicesPanel/>
                <ServicesPanel/>
            </View>
            
        </View>
    )
};

export default SpProfileScreen;