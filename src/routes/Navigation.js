import React, { useContext } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/Auth/HomeScreen';
import LoginScreen from '../screen/Auth/LoginScreen';
import RegisterScreen from '../screen/Auth/RegisterScreen';
import ForgotPassword from '../screen/Auth/ForgotPasswordScreen';
import DashboardScreen from '../screen/Dashboard/Index';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screen/Splash/Index';
import AboutScreen from '../screen/Settings/AboutScreen';
import PolicyScreen from '../screen/Settings/PolicyScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from '../screen/Dashboard/Activity';
import WalletScreen from '../screen/Dashboard/Wallet';
import ProfileScreen from '../screen/Dashboard/Profile';
import CheckEmailScreen from '../screen/Auth/CheckEmail';


const Stack= createNativeStackNavigator();
const Drawer =createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    const {userInfo, splashLoading} =useContext(AuthContext)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {splashLoading ? (
                    <Stack.Screen  
                        name ="Splash Screen" 
                        component={SplashScreen} 
                        options={{headerShown: false}}
                        />
                ): (
                    userInfo.access_token ? (                      
                        <Stack.Screen 
                            name="Dashboard" 
                            component={DashboardScreen}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',}, title:'Register'}}
                        />                    
                ) : (
                    <>
                        <Stack.Screen 
                            name="Home" 
                            component={HomeScreen}
                            options={{headerShown:false}}
                        />
                        <Stack.Screen 
                            name="LoginScreen" 
                            component={ForgotPass}
                            options={{headerShown:false}}
                        />
                        <Stack.Screen 
                            name="Register" 
                            component={RegisterScreen}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',}, title:'Register'}}
                        />
                    </>
                    )
                )}             */}
                 <Stack.Screen 
                            name="Home" 
                            component={HomeScreen}
                            options={{headerShown:false}}
                        />
                        <Stack.Screen 
                            name="LoginScreen" 
                            component={ForgotPass}
                            options={{headerShown:false}}
                        />
                        <Stack.Screen 
                            name="Register" 
                            component={RegisterScreen}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',}, title:'Register'}}
                        />                  
                         <Stack.Screen 
                            name="Dashboard" 
                            component={DrawerRoutes}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',},headerShown:false,}}
                        />  
            </Stack.Navigator>
        </NavigationContainer>
    )
};

function ForgotPass() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}  
            options={{
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

  function DrawerRoutes(){
      return(
            <Drawer.Navigator initialRouteName='MyDashboard'>
                <Drawer.Screen name="MyDashboard" 
                component={BottomTab} 
                options={{headerStyle: {backgroundColor: '#C4DFEE',}}}
                />
                <Drawer.Screen name="About" component={AboutScreen}/>
                <Drawer.Screen name="Policy" component={PolicyScreen}/>
            </Drawer.Navigator>
      );
  }

  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="BottomTab" component={DashboardScreen} options={{headerShown:false,}} />
        <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown:false,}}/>
        <Tab.Screen name="Wallet" component={WalletScreen} options={{headerShown:false,}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false,}}/>
      </Tab.Navigator>
    );
  }
export default Navigation;