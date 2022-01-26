import React from 'react';
import { LogBox } from 'react-native';
// import {Text, View} from 'react-native';
import {StatusBar, Text, View} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/routes/Navigation';
import SubCategoryScreen from './src/screen/Dashboard/SubCetagory';
// import CategoryScreen from './src/screen/Dashboard/Category';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
const App = () => {
    return (
        <AuthProvider>
            <StatusBar backgroundColor="#0078B7" />
            <Navigation/>
       </AuthProvider>
    // <SubCategoryScreen/>
    )
};

export default App;