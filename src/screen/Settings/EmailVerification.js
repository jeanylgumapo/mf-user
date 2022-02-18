import React,{useState} from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { EvilIcons, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Input, Button } from 'react-native-elements';

const EmailVerificationScreen = () => {
    const [modalOpen, setModalOpen]=useState(false);
    return (
        <View style={tailwind`h-full bg-white`}> 
           <Modal visible={modalOpen}>
                <View style={tailwind`bg-primary p-4 flex-row`}>
                        <TouchableOpacity onPress={() => setModalOpen(false) } >
                            <EvilIcons name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={tailwind`text-white font-bold text-base mx-2`}> OTP CODE</Text>
                        
                       
                    </View>
                
                <View style={tailwind`items-center mx-4`}>
                    <MaterialCommunityIcons name="progress-check" size={256} color="yellow" />
                        <Input
                        placeholder='123456'
                        errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                    />
                    
                </View>  
                <Button  
                    title='Verifiy' 
                    onPress={() => setModalOpen(true)

                        // {login(email, password, navigation, 'cu')} 
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
                    <Text style={tailwind`text-base text-gray-400 text-center`}>Did not received OTP? click here to resend</Text>             
            </Modal>
            <View style={tailwind`items-center`}>
                <MaterialCommunityIcons name="email-send" size={256} color="#0078B7" />
                <Text style={tailwind`font-bold text-2xl text-gray-600`}> Email Verification</Text>
                <View style={tailwind`flex-nowrap w-3/4 items-center text-gray-400 text-base`}><Text style={tailwind` text-center`}> Update  email address we will send you on 
                OTP to verify</Text></View>

            </View>
                <Input
                    placeholder='johndoe@gmail.com'
                    errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    // value={email}
                    // onChangeText={text=> setEmail(text)}
                />
                <Button  
                    title='Continue' 
                    onPress={() => setModalOpen(true)

                        // {login(email, password, navigation, 'cu')} 
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
            {/* <TouchableOpacity onPress={() => setModalOpen(true) } style={tailwind`bg-primary rounded-full items-center w-14 py-4 px-2`}>
                <Entypo  name="plus" size={24} color="white" />
            </TouchableOpacity> */}
        </View>
    )
};

export default EmailVerificationScreen;