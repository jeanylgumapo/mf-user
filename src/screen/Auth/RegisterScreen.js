import React, {useContext, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../../styles/global';
import { AuthContext } from '../../context/AuthContext';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay/lib';

// import { registerAsset } from 'react-native-web/dist/cjs/modules/AssetRegistry';

const RegisterScreen = ({navigation}) => {
    const [name, setName]=useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [password_confirmation, setPwconfirmation]=useState(null);
    const [mobile_no, setMobile_no]=useState(null);
    const {isLoading, register}=useContext(AuthContext);
    
    return (
        <View style={tailwind`bg-primary flex`}>
            <View style={tailwind`h-full bg-white`}>
                {/* <Spinner visible={isLoading}/> */}
                <View style={tailwind`p-4 bg-primary w-full`}></View>
                <View style={tailwind`m-8 text-left`}>
                    <Text style={tailwind`font-bold text-2xl w-3/4 text-left tracking-wider`}>Let's Create your Accounty</Text>
                </View>
            <View style={tailwind`mx-4`}>
                
                 <Input
                    placeholder='Fullname'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                    value={name}
                    onChangeText={text=> setName(text)}
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                        />                
                <Input
                    placeholder='Email Address'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    value={email}
                    onChangeText={text=> setEmail(text)}
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                 <Input
                    placeholder='Phone Number'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    value={mobile_no}
                    onChangeText={text=> setMobile_no(text)}
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                {/* <TextInput 
                    style={globalStyles.input} 
                    placeholder="Email" 
                    value={email}
                    onChangeText={text=> setEmail(text)}
                /> */}
                {/* <TextInput style={globalStyles.input} placeholder="Mobile Number" /> */}
                {/* <TextInput 
                    style={globalStyles.input} 
                    placeholder="Password" 
                    value={password}
                    onChangeText={text=> setPassword(text)}
                    secureTextEntry={true} 
                /> */}
                <Input 
                    placeholder="Password" 
                       value={password}
                        onChangeText={text=> setPassword(text)}
                        secureTextEntry={true} 
                        inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                <Input 
                    placeholder="Confirm Password" 
                       value={password_confirmation}
                    onChangeText={text=> setPwconfirmation(text)}
                    secureTextEntry={true} 
                    inputStyle={tailwind`text-sm text-black tracking-wide`}
                />
                <Button  
                    title='Register' 
                    // onPress={() => 
                    //     {register(name, email,mobile_no, password, password_confirmation,navigation);
                        // navigation.navigate('LoginScreen')
                        // { navigation.navigate('Dashboard', register(name, email,mobile_no, password, password_confirmation), )}
                    // }
                    // }
                        titleStyle={tailwind`text-white font-bold tracking-widest text-base`}
                        buttonStyle={tailwind`bg-primary rounded-2xl p-2`}
                        containerStyle={tailwind`mx-10 my-4`}
                    />
                </View>
                <View style={tailwind`mx-4 items-center`}>
                            <View style={tailwind`flex flex-row`}>
                            <Text style={tailwind`text-sm text-gray-600 tracking-wider`}>Already registered?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={tailwind`text-primary-color mx-2 text-sm tracking-wider`}>Click here</Text>
                            </TouchableOpacity>
                            </View>                         
                        </View> 
                        <View style={tailwind`m-4 items-center`}>
                            <Text style={tailwind`text-center text-primary-color text-xs tracking-wider`}> Or Sign up With</Text>
                            <View style={tailwind`flex flex-row`}>
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/google.png')}/> 
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/facebook.png')}/>
                            <Image style={tailwind`h-6 w-6 m-2`} source ={require('../../../assets/twitter.png')}/> 
                            </View>                         
                        </View> 
            </View>
        </View>
    )
};

export default RegisterScreen;