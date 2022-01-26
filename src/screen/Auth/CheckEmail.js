import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

const CheckEmailScreen = ({navigation}) => {
    return (
        <View>
            <Text> Check your Email</Text>
            <Text> We have sent a password recovery 
            instructions to your email
            </Text>
            <Button title="Open Email App" onPress={() =>navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                    })} />
            <TouchableOpacity onPress={() =>navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                    })}>
                <Text>Skip, I'll COnfirm Later</Text>
            </TouchableOpacity>
            <Text> Did not received the email? Check your spam filter or try resend here</Text>
        </View>
    )
};

export default CheckEmailScreen;