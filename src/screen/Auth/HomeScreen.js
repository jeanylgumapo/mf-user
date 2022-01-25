import React from 'react';
import { View, StatusBar} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { globalStyles } from '../../styles/global';
import { Button } from 'react-native-elements';
// import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({navigation}) => {
    return (
        <View style={tailwind`bg-white flex-col-reverse flex h-full`}>   
            <View style={tailwind`rounded-t-lg bg-white my-8 mx-4`}>         
                <Button 
                    titleStyle={{ fontWeight: '700' }, {color:'#0078B7'}}
                    buttonStyle={{
                    backgroundColor: '#fff',
                    borderColor: '#0078B7',
                    borderWidth: 1,
                    borderRadius: 8,
                    }}
                    containerStyle={{
                    marginHorizontal: 50,

                    }}
                    style={globalStyles.buttons} 
                    title='Sign up' 
                    onPress={() => navigation.navigate('Register')} />
                <Button  
                    title='Log in' 
                    onPress={() => navigation.navigate('LoginScreen')}
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
    )
};

export default HomeScreen;