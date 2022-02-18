import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Input, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const ForgotPasswordScreen = ({navigation}) => {

    return (
        <View style={tailwind`bg-primary flex`}>
            <View style={tailwind`h-full bg-white `}>
                <View style={tailwind`m-8 text-left `}>
                    <Text style={tailwind`my-4 font-bold text-3xl text-primary-color`}>Forgot Password?</Text>
                    <Text>Enter the email associated with your account
                        and we'll send an email with instructions to
                        reset your password
                    </Text>
                </View>
                <View style={tailwind`my-8 mx-4`}>                   
                    <Input
                            placeholder='Phone number or Email'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                        <Button  
                            title='Send Instruction' 
                            onPress={() => 
                               
                                navigation.navigate('CheckEmail')
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
                </View>  
            </View>                     
        </View>
    )
};

export default ForgotPasswordScreen;