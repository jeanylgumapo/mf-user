import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/Auth/LoginScreen';
import ForgotPassword from '../screen/Auth/ForgotPasswordScreen';
import CheckEmailScreen from '../screen/Auth/CheckEmail';

const Stack= createNativeStackNavigator();

function ForgotPass() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}  
            options={{
                headerShown:false,
                headerStyle:  
                {backgroundColor: '#0078B7'}, 
                title:'Mr Fixxy',
                headerTitleStyle: {
                    color: 'white'
                  }
                }
            }              
        />
        <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPassword} 
            options={{
                headerStyle:  
                {backgroundColor: '#0078B7'}, 
                title:'Mr Fixxy'
                }} />   
        <Stack.Screen 
            name="CheckEmail" 
            component={CheckEmailScreen} 
            options={{
                headerStyle:  
                {backgroundColor: '#0078B7'}, 
                title:'Mr Fixxy'
                }} />   
      </Stack.Navigator>
    );
  }
  export default ForgotPass;
