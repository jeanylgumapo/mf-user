import React from "react";
import { View, ActivityIndicator } from "react-native";

const SplashScreen =() => {
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor:'#eee'}}>
            <ActivityIndicator size='large' color='#555' />
        </View>
    );
};
export default SplashScreen;