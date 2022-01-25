import React, { useContext } from 'react';
import {Text, View,ScrollView, Image, Button} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Icon } from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons'; 
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'; 

const Dashboard = () => {
    const {userInfo, isLoading, logout}= useContext(AuthContext);
    return (
        <View style={tailwind`bg-white h-full`}> 
        <View>
            <View style={tailwind`bg-secondary rounded-b-20`}>
            {/* <Spinner visible={isLoading} /> */}
            <View>
                <View>
                        <Text style={tailwind`text-left font-bold text-xl text-white`}>Search for a Servicing?</Text>
                        <Text style={tailwind`text-sm text-white`}>Due for an Oil Change?</Text>
                    </View>            
                <Input
                    placeholder='Search'                
                    // style={tailwind`bg-white m-2 border-0 border-none`}                               
        />    
               
            </View>
            <View style={tailwind`flex flex-row mb`}>
                    <Text> Select Category</Text>
                    <View style={tailwind`items-end`}><Text> View All</Text></View>
                </View>
            </View>
            <View style={tailwind`flex flex-row flex-nowrap mt10`}>
            <View style={tailwind`bg-primary category-card-size m-2 items-center rounded-xl`}>
                <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
            </View>
            <View style={tailwind`bg-primary category-card-size m-2 items-center rounded-xl`}>
                <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
            </View>
            <View style={tailwind`bg-primary category-card-size m-2 items-center rounded-xl`}>
                <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
            </View>
            <View style={tailwind`bg-primary category-card-size m-2 items-center rounded-xl`}>
                <MaterialCommunityIcons name="engine-outline" size={32} color="white" />
                <Text style={tailwind`text-xs text-white`}> Maintenance</Text>
            </View>
        </View>
        </View>
        <ScrollView>
        <View >
        <Image style={tailwind`w-full h-40 mt10 rounded-20`} source ={require('../../../assets/ads.jpg')}/> 
        </View>
        <View style={tailwind`flex`}>
            <View style={tailwind`flex-row m-2`}>
                <Text> Popular Mechanic</Text>
                <Text> View All</Text>
            </View>
            <View style={tailwind`flex items-center`}>
                <View style={tailwind`flex-row bg-gray-50 rounded-xl p-4`}>
                    <Image style={{ width: 64, height: 64 }} source ={require('../../../assets/user.png')}/> 
                    <View>
                        <Text style={tailwind`font-bold text-lg text-primary-color`}>Eddie Gendraule</Text>
                        <Text  style={tailwind`text-xs`}> Mechanic, 41</Text>
                        <Text  style={tailwind`font-bold text-xs text-gray-400`}> 4.4 
                            <FontAwesome name="star" color="yellow" /> +30 clients</Text>
                        <View style={tailwind`items-end`}><AntDesign name="rightcircle" size={24} color="#0078B7" /></View>
                    </View>
                </View>
            </View>
        </View>
        </ScrollView>
        {/* <Text> Welcome {userInfo.user.name}</Text> */}
        
        {/* <Image style={{ width: 40, height: 40 }} source ={require('../../../assets/maintenance.png')}/> */}
        
        {/* <Text> Welcome {userInfo.user.name}</Text>
            <Button title='Logout' onPress={logout}/> */}
        </View>
    )
};

export default Dashboard;