import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from "../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const AuthContext=createContext();

export const AuthProvider=({children})=> {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading]=useState(false);
    //user type 3 for customer
    const [user_type, setUserType]=useState("3");
    const register=(name, email,mobile_no, password, password_confirmation, navigation) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/register`, {
            name, 
            email, 
            mobile_no,
            password,
            password_confirmation,
            user_type,
        }).then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            navigation.navigate('LoginScreen')
            setIsLoading(false);
            console.log(userInfo);

        }).catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
        });
    }

    const login=(email, password, navigation, app) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/login`, {
            email,
            password,
            app,
        })
        .then(res => {
            let userInfo= res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            // navigation.navigate('LoginScreen')
            navigation.navigate('Dashboard')
            setIsLoading(false);
        }).catch (e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
        });

    }
    const logout =() => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/logout`,{

        },
        {
            headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
        ).then(res => {
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
        }).catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
        })
    }
    const isLoggedIn = async () => {
        try {
          setSplashLoading(true);
    
          let userInfo = await AsyncStorage.getItem('userInfo');
          userInfo = JSON.parse(userInfo);
    
          if (userInfo) {
            setUserInfo(userInfo);
          }
    
          setSplashLoading(false);
        } catch (e) {
          setSplashLoading(false);
          console.log(`is logged in error ${e}`);
        }
      };

    useEffect(() =>{
        isLoggedIn();
    }, []);
    return (
        <AuthContext.Provider 
        value={{
            isLoading, 
            userInfo,
            splashLoading,
            register,
            login,
            logout,
            isLoggedIn,
            }}>
            {children}
        </AuthContext.Provider>
        )
}