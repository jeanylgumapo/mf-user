import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';

const TermsScreen = () => {
    return (
        <View style={tailwind`h-full bg-white`}>
            <View style={tailwind`m-4`}>
                <ScrollView>
                <Text style={tailwind`font-bold text-primary-color text-2xl my-2`}> Terms and Condition</Text>
                    <View style={tailwind`m-2 p-4 border-gray-50 border-b-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Agreement</Text>
                        <Text style={tailwind`text-xs text-gray-500 m-2`}>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit 
                        </Text>
                    </View>
                    <View style={tailwind`m-2 p-4 border-gray-50 border-b-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Terms and Services</Text>
                        <Text style={tailwind`text-xs text-gray-500 m-2`}>ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
                    </View>
                    
                    <View style={tailwind`m-2 p-4 border-gray-50 border-b-2 drop-shadow rounded`}>
                        <Text style={tailwind`font-bold text-lg`}>Conditions</Text>
                        <Text style={tailwind`text-xs text-gray-500 m-2`}>ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default TermsScreen;