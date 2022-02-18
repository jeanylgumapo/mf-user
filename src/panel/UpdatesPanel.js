import React from 'react';
import {Text, View} from 'react-native';
import NotificationCard from '../components/NotificationCard';
import tailwind from 'tailwind-react-native-classnames';
const UpdatesPanel = () => {
    return (
        <View>
            <Text style={tailwind`text-2xl font-bold text-primary-color`}>News & Updates</Text>
            <View style={tailwind`p-4`}>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </View>
        </View>
    )
};

export default UpdatesPanel;