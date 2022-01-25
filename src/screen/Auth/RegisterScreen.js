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
            <View style={tailwind`h-full bg-white rounded-t-20`}>
                <Spinner visible={isLoading}/>
                <View style={tailwind`m-8 text-left `}>
                    <Text style={tailwind`font-bold text-3xl text-primary-color`}>Let's create your Account</Text>
                </View>
            <View style={tailwind`mx-4`}>
                 <Input
                    placeholder='Fullname'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    value={name}
                    onChangeText={text=> setName(text)}
                        />                
                <Input
                    placeholder='Phone number or Email'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    value={email}
                    onChangeText={text=> setEmail(text)}
                />
                 <Input
                    placeholder='Phone Number'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    value={mobile_no}
                    onChangeText={text=> setMobile_no(text)}
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
                />
                <Input 
                    placeholder="Confirm Password" 
                       value={password_confirmation}
                    onChangeText={text=> setPwconfirmation(text)}
                    secureTextEntry={true} 
                />
                <Button  
                    title='Register' 
                    onPress={() => 
                        {register(name, email,mobile_no, password, password_confirmation,navigation);
                        // navigation.navigate('LoginScreen')
                        // { navigation.navigate('Dashboard', register(name, email,mobile_no, password, password_confirmation), )}
                    }
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
                <View style={tailwind`mx-4 items-center`}>
                            <View style={tailwind`flex flex-row`}>
                            <Text>Already registered?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                <Text>Click here</Text>
                            </TouchableOpacity>
                            </View>                         
                        </View> 
                        <View style={tailwind`mx-4 items-center`}>
                            <Text style={tailwind`text-center`}> Or Sign up With</Text>
                            <View style={tailwind`flex flex-row `}>
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/google.png')}/> 
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/facebook.png')}/>
                            <Image style={{ width: 24, height: 24 }} source ={require('../../../assets/twitter.png')}/> 
                            </View>                         
                        </View> 
            </View>
        </View>
    )
};

export default RegisterScreen;