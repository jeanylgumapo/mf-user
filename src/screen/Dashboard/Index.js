import React, { useContext, useState } from 'react';
import {Text, View,ScrollView, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Icon } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'; 
import CategoryCard from '../../components/CategoryCard';
import ServiceCard from '../../components/ServiceCard';


const Dashboard = ({navigation}) => {
    const {userInfo, isLoading, logout}= useContext(AuthContext);
    const [categories, setCategories] =useState([
        {
            title: 'Maintenance',
            key: '1'
        },
        {
            title: 'CHange Oil',
            key: '2'
        },
        {
            title: 'Battery',
            key:'3'
        }
    ]);
    const [packages, setPackages] =useState([
        {
            title: 'Major Service',
            key: '1'
        },
        {
            title: 'Full Service',
            key: '2'
        },
        {
            title: 'Basic Service',
            key:'3'
        }
    ]);
    return (
        <View style={tailwind`bg-white h-full`}> 
            <View style={tailwind`m-4`}> 
                <Image style={tailwind`w-full h-40 rounded-20`} source ={require('../../../assets/ads.jpg')}/> 
                <View>              
                    {/* <Spinner visible={isLoading} /> */}

                    <View style={tailwind`my-4`}>
                        <Text style={tailwind`font-bold text-lg `}> Select Car Services</Text>
                      <View style={tailwind`flex-row`}>
                      {
                            packages.map((item) => {
                                return (
                                    <View key={item.key}>
                                        {/* <Text>{item.title}</Text> */}
                                        <TouchableOpacity 
                                        onPress={() => navigation.navigate('BookingRoute', {item})}
                                        >
                                            <ServiceCard label={item.title} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                    </View>
                    <View style={tailwind`flex flex-row`}>
                        <View style={tailwind`items-end w-2/4 items-start`}><Text style={tailwind`font-bold text-lg `}>Other Services </Text></View>
                        {/* <View style={tailwind`items-end w-2/4`}><TouchableOpacity onPress={() => navigation.navigate('Category')}><Text style={tailwind`font-bold`}> View All</Text></TouchableOpacity></View> */}
                    </View>
                    </View>
                    <View style={tailwind`flex flex-row flex-nowrap`}>                                              
                        {
                            categories.map((item) => {
                                return (
                                    <View key={item.key}>
                                        {/* <Text>{item.title}</Text> */}
                                        <TouchableOpacity>
                                            <CategoryCard label={item.title} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                <View>
                    <Text style={tailwind`font-bold text-lg`}> Latest Updates</Text>
                </View>
            </View>
            
            {/* <FlatList
                data={categories}
                renderItem={({ item }) => (
                <Text style={tailwind`text-gray-400`}>{item.title}</Text>
                    
                )}
            /> */}

        {/* <ScrollView>
        <View style={tailwind`flex`}>
            <View style={tailwind`flex-row m-2`}>
                <Text> Popular Mechanic</Text>
                <Text> View All</Text>
            </View>
            <View style={tailwind`flex`}>
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
        </ScrollView> */}
        {/* <Text> Welcome {userInfo.user.name}</Text> */}
        
        {/* <Image style={{ width: 40, height: 40 }} source ={require('../../../assets/maintenance.png')}/> */}
        
        {/* <Text> Welcome {userInfo.user.name}</Text>
            <Button title='Logout' onPress={logout}/> */}
             
        </View>
    )
};

export default Dashboard;