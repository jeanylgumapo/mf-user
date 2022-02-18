import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';

const CheckEmailScreen = ({navigation}) => {
    return (
        <View style={tailwind`h-full bg-white items-center flex`}>
             <View style={tailwind`pt-10 mt-10`}>
                <Image style={{ width: 200, height: 200 }} source ={require('../../../assets/email.png')}/> 
            </View>
            <Text style={tailwind`text-lg font-bold`}> Check your Email</Text>
            <Text style={tailwind`py-4 w-3/4 text-center text-sm text-gray-600`}> We have sent a password recovery 
            instructions to your email
            </Text>
            <Button  
                title='Check Email' 
                // onPress={() => 
                               
                //     navigation.navigate('Send Instruction')
                // }
                 titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                    backgroundColor: '#0078B7',
                 borderColor: 'transparent',
                 borderWidth: 1,
                borderRadius: 8,
                 margin:5,
                 }}
                 containerStyle={{
                 marginHorizontal: 100,
                }}
            />   
            <TouchableOpacity onPress={() =>navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                    })}>
                <TouchableOpacity><Text>Skip, I'll COnfirm Later</Text></TouchableOpacity>
            </TouchableOpacity>
            <Text style={tailwind`mb-8 w-3/4 text-center text-xs text-gray-600 bottom-0 absolute`}> Did not received the email? Check your spam filter or try resend here</Text>
        </View>
    )
};

export default CheckEmailScreen;