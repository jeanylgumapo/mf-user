import React from "react";
import { View, Image, Text, Button } from "react-native";
import tailwind from 'tailwind-react-native-classnames';

export default function NotificationCard(){

    return(
        <View style={tailwind`flex border-b-2 border-gray-50 py-2`}>
            <View style={tailwind`flex-row`}>
                    <View style={tailwind`w-2/4 items-start`}><Text style={tailwind`font-bold text-base`}> Oil Change</Text></View>
                    <View style={tailwind`w-2/4 items-end`}><Text style={tailwind`text-green-400 font-bold text-base`}>CASH PAYMENT</Text></View>
            </View>
            <View style={tailwind`flex-row`}>
                <View style={tailwind`w-2/4 items-start`}><Text style={tailwind`text-sm text-gray-500`}> 10:00AM</Text></View>
                        <View style={tailwind`w-2/4 items-end`}><Text style={tailwind`text-sm text-gray-500`}>Php 1,800.00</Text></View>
            </View>
        </View>
    );
}