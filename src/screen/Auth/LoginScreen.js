import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const LoginScreen = ({navigation}) => {
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const {isLoading, login}=useContext(AuthContext);
    // const val=useContext(AuthContext);
    return (
        <View style={tailwind`bg-primary flex`}>
            <View style={tailwind`h-full bg-white rounded-t-20`}>
                {/* <Spinner visible={isLoading}/> */}
                <View style={tailwind`m-8 text-left `}>
                    <Text style={tailwind`my-4 font-bold text-3xl text-primary-color`}>Login to see our Community</Text>
                </View>
                <View style={tailwind`my-8 mx-4`}>
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
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            value={email}
                            onChangeText={text=> setEmail(text)}
                        />
                        <Input 
                        placeholder="Password" 
                        value={password}
                        onChangeText={text=> setPassword(text)}
                        secureTextEntry={true} />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={tailwind`text-primary-color text-right`}>Forgot Password</Text>
                        </TouchableOpacity>
                        <Button  
                            title='Log in' 
                            onPress={() => 
                                {login(email, password, navigation)} 
                                // { navigation.navigate('Dashboard', login(email, password), )}
                            }
                            titleStyle={{ fontWeight: '700' }}
                            buttonStyle={{
                            backgroundColor: '#0078B7',
                            borderColor: 'transparent',
                            borderWidth: 1,
                            borderRadius: 8,
                            margin:5,
                            }}
                            containerStyle={{
                            marginHorizontal: 50,
                            }}
                        />
                        <View style={tailwind`m-4 items-center`}>
                            <View style={tailwind`flex flex-row`}>
                            <Text>Not yet registered?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text>Click here</Text>
                            </TouchableOpacity>
                            </View>                         
                        </View> 
                        <View style={tailwind`m-4 items-center`}>
                            <Text style={tailwind`text-center`}> Or Sign in With</Text>
                            <View style={tailwind`flex flex-row `}>
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/google.png')}/> 
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/facebook.png')}/>
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/twitter.png')}/> 
                            </View>                         
                        </View>    
                </View>  
            </View>                     
        </View>
    )
};

export default LoginScreen;