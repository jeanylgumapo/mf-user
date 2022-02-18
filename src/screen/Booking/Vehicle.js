import React,{useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import EditVehicle from '../../components/EditVehicle';

const VehicleScreen = ({navigation}) => {
    const [isShown, setIsShown]=useState(false);
   
    return (
        <View style={tailwind`h-full bg-white flex`}> 
                     
            <Text style={tailwind`text-lg font-bold p-2 mx-2`}> What's your vehicle?</Text>
            <ScrollView>
            <View style={tailwind` p-4 m-4`}>
                <Text style={tailwind`font-bold text-base`}>You booked</Text> 
                    <View style={tailwind`flex-row`}>                        
                      <Text>Major Service</Text>                         
                </View> 
            </View> 
            <View style={tailwind`m-4`}>
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
                <View style={tailwind`mx-4`}>
                    {/* <Text style={tailwind`font-bold text-base my-2`}>My Garage Vehicle</Text> */}
                   <View style={tailwind`flex-row`}>
                        <Input
                            placeholder='My Car1'
                            style={tailwind`text-sm`}
                                    
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                    <TouchableOpacity onPress={()=> setIsShown(!isShown)}>
                        <Text >edit</Text>
                    </TouchableOpacity>                          
                    </View>
                        {
                        isShown ?
                        (
                        <EditVehicle/>) : null
                    }
                </View>  
                <View style={tailwind`px-8`}>
                    <Button                                        
                        title='Add New Car' 
                        onPress={() => 
                            // {login(email, password, navigation, 'cu')} 
                            { navigation.navigate('Location' )}
                         }
                        titleStyle={{ fontWeight: '700'}}
                        buttonStyle={{
                        backgroundColor: '#0078B7',
                        borderColor: 'transparent',
                        borderWidth: 1,
                         borderRadius: 8,
                        margin:5,                      
                        }}                                   
                    />
                </View>                  
            </View>
            </ScrollView>
            <View style={tailwind`bottom-0 absolute flex-row w-full px-4 items-center py-4 bg-white drop-shadow border-t-2 border-gray-50`}>
                <View style={tailwind`w-2/4 items-start`}>
                    <Text style={tailwind`text-gray-400 text-base`}>You have choose</Text>
                    <Text style={tailwind`font-bold text-black text-lg`}>My Car 1</Text>
                </View>
                <View style={tailwind`w-2/4 items-end `}>
                    <Button     
                                   
                        title='Continue' 
                        onPress={() => 
                            // {login(email, password, navigation, 'cu')} 
                            { navigation.navigate('Location' )}
                        }
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

export default VehicleScreen;