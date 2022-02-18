import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import { FontAwesome } from '@expo/vector-icons';



const EditProfileScreen = ({navigation}) => {
    const data = [
        {
            value:'0',
            label:'Male'
        },
        {
            value:'1',
            label:'Female'
        }
    ]
    const [date, setDate] = useState('09-10-2020');
    return (
        <View style={tailwind`h-full bg-white flex`}>
            <View>
                <View style={tailwind`items-center bg-white py-8`}>
                    <Image style={tailwind`rounded-20 w-20 h-20 `} source ={require('../../../assets/user.png')}/> 
                </View>
                <View style={tailwind`mx-4`}>
                    <Input
                        placeholder='Fulname'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />   
                    <View style={tailwind`p-4`}>
                        {/* <Text style={tailwind`mx-2 text-lg text-gray-400`}>Birthdate:</Text>  */}
                        <DatePicker
                            // style={styles.datePickerStyle}
                            style={tailwind`border-b-2 border-gray-400 w-full`}
                            date={date} // Initial date from state
                            mode="date" // The enum of date, datetime and time
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-2016"
                            maxDate="01-01-2022"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                display: 'none',
                                position: 'absolute',
                                right: 0,
                                top: 4,
                                marginLeft: 0,
                                },
                                dateInput: {
                                // marginRight: "60%",
                                borderWidth:0,
                                position:'absolute',
                                left:0,
                                 
                                },
                            }}
                            
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                            />
                        </View>
                        <View style={tailwind`flex-row`}>
                        <View style={tailwind`w-3/4`}>
                            <Input
                                placeholder='Email'
                                errorStyle={{ color: 'red' }}
                                errorMessage='ENTER A VALID ERROR HERE'
                                
                            />  
                            
                        </View>
                        <View style={tailwind`w-1/4 flex-row items-center`}>
                            <FontAwesome onPress={() => navigation.navigate('Email')} name="check-circle-o" size={24} color="green" />
                            <FontAwesome name="close" size={24} color="red" />
                        </View>
                    </View> 
                    <View style={tailwind`flex-row`}>
                        <View style={tailwind`w-3/4`}>
                            <Input
                                placeholder='Mobile'
                                errorStyle={{ color: 'red' }}
                                errorMessage='ENTER A VALID ERROR HERE'
                                
                            />  
                            
                        </View>
                        <View style={tailwind`w-1/4 flex-row items-center`}>
                        <FontAwesome onPress={() => navigation.navigate('Mobile')} name="check-circle-o" size={24} color="green" />
                            <FontAwesome name="close" size={24} color="red" />
                        </View>
                    </View> 
                    <Input
                        placeholder='Address'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    /> 
                    <View>
                        <Text>Sex:</Text>
                    </View>
                    <Text>Password</Text> 
                    <Button title="Save"/>
                </View>
            </View>
        </View>
    )
};

export default EditProfileScreen;