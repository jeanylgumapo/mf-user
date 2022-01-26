import React from 'react';
import 'react-native-gesture-handler';
import {Text, View,ScrollView, Image, Button} from 'react-native';

const ProfileScreen = () => {
    return (
        <View>
            <Image style={{ width: 64, height: 64 }} source ={require('../../../assets/user.png')}/> 
            <Text> Kevin Johnson</Text>
            <Text> kevinjohnson@gmail.com</Text>
            <Text> Balance</Text>
            <Text> 240$</Text>
            <Text> Points</Text>
            <Text> 1850</Text>
            <Text> Profile Detail</Text>
            <Text> Edit Profile</Text>
            <Text> My Garage</Text>
            <Text> Favorite Provider</Text>
            <Text> Payments</Text>

        </View>
    )
};

export default ProfileScreen;