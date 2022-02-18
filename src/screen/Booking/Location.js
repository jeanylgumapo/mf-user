import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Input, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {Dropdown} from 'react-native-element-dropdown';

const LocationScreen = ({navigation}) => {
    const [date, setDate] = useState('09-10-2020');
    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
        {label: 'Item 5', value: '5'},
        {label: 'Item 6', value: '6'},
        {label: 'Item 7', value: '7'},
        {label: 'Input new car', value: '8'},
    ];
    const [dropdown, setDropdown] = useState(null);
    const _renderItem = item => {
        return (
        <View >
            <Text>{item.label}</Text>
        </View>
        );
    };
    return (
        <View style={tailwind`flex bg-white h-full`}>
            <ScrollView>
           <View style={tailwind`m-4`}>
            <Text style={tailwind`font-bold text-lg text-black my-2`}>What's your appropriate schedule?</Text>
           
            <View style={tailwind`border-2 p-4 rounded-2xl border-gray-100 my-4`}>
                
                <Text style={tailwind`font-bold text-base`}>You booked</Text> 
                <View style={tailwind`flex-row`}>
                       
                            <Input
                                placeholder='Major Service'
                                style={tailwind`text-sm`}
                                // inputStyle={tailwind``}
                                // errorStyle={{ color: 'red' }}
                                // errorMessage='ENTER A VALID ERROR HERE'
                                // value={email}
                                // onChangeText={text=> setEmail(text)}
                            />
                        <TouchableOpacity >
                            <Text style={tailwind`text-xs text-gray-600`} >edit</Text>
                        </TouchableOpacity>                          
                    </View>
                    <View style={tailwind`m-2`}>
                        <Text style={tailwind`text-xs text-gray-600`}>Select Date</Text>
                        <DatePicker
                            // style={styles.datePickerStyle}
                            style={tailwind`border-b-2 border-gray-400 w-full my-2`}
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
                    <View>
                        <Text  style={tailwind`text-xs text-gray-600 my-2`}>Select Time</Text>
                        <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm text-gray-600`}
                                placeholder="Select Time"
                                value={dropdown}
                                onChange={item => {
                                setDropdown(item.value);
                                    console.log('selected', item);
                                }}
                                // renderLeftIcon={() => (
                                //     <Image style={styles.icon} source={require('../../../assets/user.png')} />
                                // )}
                                renderItem={item => _renderItem(item)}
                                textError="Error"
                            />
                    </View>
                    
            </View>
           
            <Text style={tailwind`mx-4 font-bold text-lg mb-4`}>Enter Your Details.</Text>
                <View style={tailwind`mb-24 py-4 px-4 border-2 rounded-2xl border-gray-100 `}>
                    <Text style={tailwind`text-right text-gray-600 text-xs`}>edit</Text>
                    <Text>Full Name</Text>
                    <Input
                        style={tailwind`text-xs`}
                        placeholder='Fullname'
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                    />
               
                        <Text>Address</Text>
                        <Input
                            style={tailwind`text-xs`}
                            placeholder='Phone number or Email'
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
               
                    <Text>Contact No:</Text>
                    <Input
                        style={tailwind`text-xs`}
                        placeholder='Phone number or Email'
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        // value={email}
                        // onChangeText={text=> setEmail(text)}
                    />
                    <Text style={tailwind`text-xs text-center m-1 text-gray-400`}>By booking this appointment you agree to the T& C</Text>
                </View>
            
           </View>
           </ScrollView>
           <View style={tailwind`bottom-0 absolute flex-row w-full px-4 items-center py-4 bg-white drop-shadow border-t-2 border-gray-50`}>
                    <View style={tailwind`w-2/4 items-start`}>
                        <Text style={tailwind`text-gray-400 text-base`}>Your Booking Schedule</Text>
                        <Text style={tailwind`font-bold text-black text-lg`}>February 25, 9AM</Text>
                    </View>
                    <View style={tailwind`w-2/4 items-end `}>
                        <Button     
                                    
                            title='Continue' 
                            onPress={() => 
                                // {login(email, password, navigation, 'cu')} 
                                { navigation.navigate('Summary' )}
                            }
                            titleStyle={{ fontWeight: '700'}}
                            buttonStyle={{
                            backgroundColor: '#0078B7',
                            borderColor: 'transparent',
                            borderWidth: 1,
                            borderRadius: 8,
                            margin:5,                      
                            padding:15
                            }}
                            
                        />
                    </View>      
                </View> 
        </View>
    ) 
};

export default LocationScreen;