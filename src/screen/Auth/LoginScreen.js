import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { FontAwesome   } from '@expo/vector-icons';


const LoginScreen = ({navigation}) => {
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const {isLoading, login}=useContext(AuthContext);
    // const val=useContext(AuthContext);
    return (
        <View style={tailwind`bg-primary flex`}>
            <View style={tailwind`h-full bg-white`}>
                <View style={tailwind`p-4 bg-primary w-full`}></View>
                {/* <Spinner visible={isLoading}/> */}
                <View style={tailwind`m-8 text-left pt-24`}>
                    <Text style={tailwind`font-bold text-2xl w-3/4 text-left tracking-wider`}>Login to see our Community</Text>
                </View>
                <View style={tailwind`mx-4`}>
                    {/* <TextInput 
                        style={globalStyles.input}
                        placeholder='Phone Number or Email'
                        value={email}
                        onChangeText={text=> setEmail(text)}
                        />
                    <TextInput
                        placeholder='Password'
                        style={globalStyles.input}
                        value={password}
                        onChangeText={text=> setPassword(text)}
                        secureTextEntry
                    /> */}
                    {/* <Text>{val}</Text> */}
                    <Input
                            placeholder='Phone number or Email'
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            value={email}
                            onChangeText={text=> setEmail(text)}
                            inputStyle={tailwind`text-sm text-black tracking-wide`}
                        />
                        <Input 
                        inputStyle={tailwind`text-sm text-black tracking-wide`}
                        placeholder="Password" 
                        value={password}
                        rightIcon={()=> <TouchableOpacity><FontAwesome name="eye-slash" size={24} color="gray" /></TouchableOpacity>}
                        onChangeText={text=> setPassword(text)}
                        secureTextEntry={true} />
                        
                        
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={tailwind`tracking-wide text-sm text-gray-400 text-right `}>Forgot Password</Text>
                        </TouchableOpacity>
                        <Button  
                            title='Sign in' 
                            onPress={() => 
                                // {login(email, password, navigation, 'cu')} 
                                { navigation.navigate('Dashboard')}
                            }
                            titleStyle={tailwind`text-white font-bold tracking-widest text-base`}
                            buttonStyle={tailwind`bg-primary rounded-2xl p-2`}
                            containerStyle={tailwind`mx-10 my-4`}
                        />
                        <View style={tailwind`m-4 items-center`}>
                            <View style={tailwind`flex flex-row`}>
                            <Text style={tailwind`text-sm text-gray-600 tracking-wider`}>Not registered yet?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={tailwind`text-primary-color mx-2 text-sm tracking-wider`}>Click here</Text>
                            </TouchableOpacity>
                            </View>                         
                        </View> 
                        <View style={tailwind`m-4 items-center`}>
                            <Text style={tailwind`text-center text-primary-color text-xs tracking-wider`}> Or Sign in With</Text>
                            <View style={tailwind`flex flex-row`}>
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/google.png')}/> 
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/facebook.png')}/>
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/twitter.png')}/> 
                            </View>                         
                        </View>    
                </View>  
            </View>                     
        </View>
    )
};

export default LoginScreen;