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
import { AntDesign } from '@expo/vector-icons';
import DrawerComponent from '../components/Drawer';
import CategoryScreen from '../screen/Dashboard/Category';
import SubCategoryScreen from '../screen/Dashboard/SubCetagory';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import PreConfirmationScreen from '../screen/Booking/PreConfirmation';
import MyGarageScreen from '../screen/Settings/MyGarage';
import EditProfileScreen from '../screen/Settings/EditProfile';
import FavoriteScreen from '../screen/Settings/Favorite';
import TermsScreen from '../screen/Settings/Terms';
import MobileVerificationScreen from '../screen/Settings/MobileVerification';
import EmailVerificationScreen from '../screen/Settings/EmailVerification';
import SpProfileScreen from '../screen/Settings/SpProfile';
import VehicleScreen from '../screen/Booking/Vehicle';
import LocationScreen from '../screen/Booking/Location';
import SummaryScreen from '../screen/Booking/Summary';
import ConfirmationScreen from '../screen/Booking/Confirmation';
import ProgressScreen from '../screen/Booking/Progress';
import ForgotPass from './LogintStack';

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
                            options={{headerShown:false,headerStyle: {backgroundColor: '#0078B7',color:'#fff',}, title:'Register'}}
                        />                  
                         <Stack.Screen 
                            name="Dashboard" 
                            component={DrawerRoutes}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',},headerShown:false,}}
                        />  
                        {/* <Stack.Screen 
                            name="Category" 
                            component={CategoryScreen}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',},headerShown:true,}}
                        />  
                         <Stack.Screen 
                            name="SubCategory" 
                            component={SubCategoryScreen}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',},headerShown:true,}}
                        />   */}
                        <Stack.Screen 
                            name="BookingRoute" 
                            component={BookingRoute}
                            options={{headerStyle: {backgroundColor: '#0078B7',color:'#fff',},headerShown:false,}}
                        />  
            </Stack.Navigator>
        </NavigationContainer>
    )
};
function EditProfile() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Profile" 
            component={EditProfileScreen}  
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
            name="Mobile" 
            component={MobileVerificationScreen} 
            options={{
                headerStyle:  
                {backgroundColor: '#0078B7'}, 
                title:'Mr Fixxy'
                }} />   
        <Stack.Screen 
            name="Email" 
            component={EmailVerificationScreen} 
            options={{
                headerStyle:  
                {backgroundColor: '#0078B7'}, 
                title:'Mr Fixxy'
                }} />   
      </Stack.Navigator>
    );
  }

    // function ForgotPass() {
    //     return (
    //       <Stack.Navigator>
    //         <Stack.Screen 
    //             name="Login" 
    //             component={LoginScreen}  
    //             options={{
    //                 headerShown:false,
    //                 headerStyle:  
    //                 {backgroundColor: '#0078B7'}, 
    //                 title:'Mr Fixxy',
    //                 headerTitleStyle: {
    //                     color: 'white'
    //                   }
    //                 }
    //             }              
    //         />
    //         <Stack.Screen 
    //             name="ForgotPassword" 
    //             component={ForgotPassword} 
    //             options={{
    //                 headerStyle:  
    //                 {backgroundColor: '#0078B7'}, 
    //                 title:'Mr Fixxy'
    //                 }} />   
    //         <Stack.Screen 
    //             name="CheckEmail" 
    //             component={CheckEmailScreen} 
    //             options={{
    //                 headerStyle:  
    //                 {backgroundColor: '#0078B7'}, 
    //                 title:'Mr Fixxy'
    //                 }} />   
    //       </Stack.Navigator>
    //     );
    //   }

    function Favorite() {
        return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Favorite" 
                component={FavoriteScreen}  
                options={{
                    headerShown:false,
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    // title:'Mr Fixxy',
                    headerTitleStyle: {
                        color: 'white'
                    }
                    }
                }              
            />
            <Stack.Screen 
                name="SpProfile" 
                component={SpProfileScreen} 
                options={{
                    headerShown:false,
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Mr Fixxy'
                    }} />   
            
        </Stack.Navigator>
        );
    }
        
    function DrawerRoutes(){
        return(
                <Drawer.Navigator drawerContent={props => <DrawerComponent {...props}/>}>
                    <Drawer.Screen name="MyDashboard" 
                    component={BottomTab} 
                    options={
                        {headerShown:true, 
                            headerStyle: 
                            {backgroundColor: '#0078B7',},
                            // headerRight:() => <Header/>,
                        //    drawerStyle:
                        //    {
                        //        width: "100%"
                        //    },
                        drawerIcon: ({focused, size}) => (
                            // <Ionicons
                            //    name="md-home"
                            //    size={size}
                            //    color={focused ? '#7cc' : '#ccc'}
                            // />
                            <AntDesign name="close" 
                            size={size} 
                            color="black"
                            color={focused ? '#7cc' : '#ccc'}
                            />
                        ),
                        }}
                    />
                    <Drawer.Screen name="Profile" component={EditProfile}
                    options={
                        {headerShown:true, 
                            headerStyle: 
                            {backgroundColor: '#0078B7',},
                        }}                
                    />
                    <Drawer.Screen name="MyGarage" component={MyGarageScreen}
                        options={
                            {headerShown:true, 
                                headerStyle: 
                                {backgroundColor: '#0078B7',},
                            }}
                    />
                    <Drawer.Screen name="Favorite" component={Favorite}/>
                    <Drawer.Screen name="About" component={AboutScreen}/>
                    <Drawer.Screen name="Terms" component={TermsScreen}/>
                    <Drawer.Screen name="Policy" component={PolicyScreen}/>
                </Drawer.Navigator>
        );
    }

    function BottomTab() {
        return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} 
            options={{
                headerShown:false,
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} 
            />
            <Tab.Screen name="Activity" component={ActivityScreen} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" size={24} color={color} />
                    ),
                }}
                />
            <Tab.Screen name="Message" component={WalletScreen} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="message-processing-outline" size={24} color={color} />
                    ),
                    }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
                headerShown:false,
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" size={24} color={color} />
                ),
                }}/>
        </Tab.Navigator>
        );
    }

    function BookingRoute() {
        return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Vehicle" 
                component={VehicleScreen}  
                options={{
                    
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Choose you vehicle',
                    headerTitleStyle: {
                        color: 'white'
                    }
                    }
                }              
            />
            <Stack.Screen 
                name="Location" 
                component={LocationScreen} 
                options={{
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Date and Location'
                    }} />   
            <Stack.Screen 
                name="Summary" 
                component={SummaryScreen} 
                options={{
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Mr Fixxy'
                    }} />   
            <Stack.Screen 
                name="Confirmation" 
                component={ConfirmationScreen} 
                options={{
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Mr Fixxy'
                    }} /> 
                    <Stack.Screen 
                name="Progress" 
                component={ProgressScreen} 
                options={{
                    headerStyle:  
                    {backgroundColor: '#0078B7'}, 
                    title:'Mr Fixxy'
                    }} /> 
        </Stack.Navigator>
        );
    }
export default Navigation;