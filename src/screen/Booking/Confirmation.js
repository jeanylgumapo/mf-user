import React, {useState} from 'react';
import {ScrollView, Text, View, Image, Modal, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button,  } from 'react-native-elements';
import { EvilIcons,AntDesign } from '@expo/vector-icons';


const ConfirmationScreen = ({navigation}) => {
    const [modalOpen, setModalOpen]=useState(false);
    return (
        <View style={tailwind`flex h-full bg-white`}>
            <ScrollView>
                <Modal visible={modalOpen}>
                    <View style={tailwind`bg-primary p-4 flex-row h-8`}>
                            {/* <TouchableOpacity onPress={() => setModalOpen(false) } >
                                <EvilIcons name="close" size={24} color="white" />
                            </TouchableOpacity> */}                           
                    </View>
                    <View style={tailwind`items-center flex p-8 mt-24`}>
                        <AntDesign name="checkcircle" size={128} color="green" />
                        <Text style={tailwind`my-2 font-bold text-2xl`}>Booking Confirmed</Text>
                        <Text style={tailwind`text-center text-base text-gray-400 my-2`}>Your Mechanic is on the way! Sit back and wait for his arrival</Text>
                        <Text style={tailwind`my-2 text-lg font-bold`}>J.O # 1101-22</Text>
                        <TouchableOpacity onPress={() => navigation.reset({
                            index: 0,
                            routes: [{ name: 'Progress' }],
                            })} style={tailwind`bg-primary rounded-2xl py-2 m-1 px-8`}><Text style={tailwind`text-white text-base font-bold`}>Track Booking</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }],
                            })
                            } 
                            style={tailwind`bg-white border-2 border-primary py-2 m-1 rounded-2xl px-8`}>
                                <Text style={tailwind`text-primary-color font-bold text-base`}>Back to Home</Text>
                        </TouchableOpacity>
                    </View>
                    
                </Modal>
                <View style={tailwind`mx-4 my-8 mb-24`}>
                <View style={tailwind`flex-row`}>
                    <Text style={tailwind`font-bold text-xl`}>Booking Summary</Text>
                    <Text style={tailwind`right-0 absolute font-bold text-base`}>J.O # 1101-22</Text>
              
                </View>
                <View style={tailwind`items-center my-4 border-2 p-4 border-gray-100 rounded-2xl`}>
                    <View style={tailwind`flex-row mx-4`}>
                    <Image style={tailwind`rounded-20 w-16 h-16`} source ={require('../../../assets/car.png')}/> 
                        <View style={tailwind`flex-col mx-4`}>
                            <Text style={tailwind`font-bold text-base text-left`}>Toyota Fortuner 2017</Text>                         
                            <View style={tailwind`flex-row`}>
                                <Text style={tailwind`text-xs text-gray-600`}>Vehicle ID #</Text><Text style={tailwind`text-primary-color text-xs`}>1013-221</Text>
                            </View>
                                <Text style={tailwind`text-xs text-gray-600`}>Last Services: June 2021</Text>
                        </View>
                    </View>
                </View>
                <View style={tailwind`border-2 p-4 border-gray-100 drop-shadow rounded-2xl`}>
                    <Text style={tailwind`font-bold text-base`}>Today, 27 January 4:45PM</Text>
                    <Text style={tailwind`right-0 absolute text-xs text-primary-color p-4`}>Change</Text>
                    <Text style={tailwind`ml-8 text-gray-600 text-sm`}>
                        +639334484888
                    </Text>
                    <Text style={tailwind`font-bold text-base`}> Rosalinda Bulat-ag</Text>
                    <Text style={tailwind`ml-8 text-gray-600 text-sm my-1`}>#25 Empress, Panacan, Davao City</Text>
                    </View>  
                     <View style={tailwind`border-2 p-4 border-gray-100 drop-shadow rounded-2xl my-4`}>
                         <Text style={tailwind`font-bold text-base`}>Mode of Payment</Text>
                         <Text style={tailwind`ml-8 text-sm text-gray-600 mb-2`}>Cash</Text>
                         <Text style={tailwind`font-bold text-base `}>Your service request</Text>
                         <View style={tailwind`flex-row`}>
                            <Text style={tailwind`ml-8 text-sm text-gray-600 mb-2`}>Major Service</Text>
                            <Text style={tailwind`right-0 absolute`}>Php 1800.00</Text>                    
                        </View>
                        <Text style={tailwind`text-sm my-2`}>Additional Service</Text>
                        <View style={tailwind`flex-row`}>
                            <Text style={tailwind`ml-8 text-sm italic text-gray-600`}>Aircon Cleaning</Text>
                            <Text style={tailwind`right-0 absolute italic`}>Php 1800.00</Text>                    
                        </View>
                        <View style={tailwind`flex-row`}>
                            <Text style={tailwind`ml-8 text-sm italic text-gray-600`}>Battery Repair</Text>
                            <Text style={tailwind`right-0 absolute italic`}>Php 1800.00</Text>                    
                        </View>
                    </View> 
                    <View style={tailwind`m-4 px-4`}>
                        <View style={tailwind`flex-row`}>
                            <Text style={tailwind`text-sm text-gray-600`}>Subtotal</Text>
                            <Text style={tailwind`right-0 absolute text-sm text-gray-600`}>Php 1800.00</Text>                    
                        </View>
                        <View style={tailwind`flex-row`}>
                            <Text style={tailwind`text-sm text-gray-600`}>Service Fee</Text>
                            <Text style={tailwind`right-0 absolute text-sm text-gray-600`}>Php 1800.00</Text>                    
                        </View>
                    </View>  
                    <Text style={tailwind`text-center text-xs text-gray-600 px-4  my-4`}>By clicking confirm this means that you agree the charges of the services</Text>              
                </View>
            </ScrollView>
            <View style={tailwind`bottom-0 absolute flex-row w-full px-4 items-center py-4 bg-white drop-shadow border-t-2 border-gray-50`}>
                <View style={tailwind`w-2/4 items-start`}>
                    <Text style={tailwind`text-gray-400 text-base`}>Total Payment</Text>
                    <Text style={tailwind`font-bold text-black text-lg`}>Php 5000.00</Text>
                </View>
                <View style={tailwind`w-2/4 items-end `}>
                    <Button     
                                   
                        title='Confirm' 
                        onPress={() => setModalOpen(true) }
                        // onPress={() => 
                        //     // {login(email, password, navigation, 'cu')} 
                        //     { navigation.navigate('Location' )}
                        // }
                        titleStyle={{ fontWeight: '700'}}
                        buttonStyle={{
                        backgroundColor: '#0078B7',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 8,
                        margin:5,                      
                        padding:15
                        }}
                        
                    />
                </View>      
            </View> 
        </View>
    )
};

export default ConfirmationScreen;