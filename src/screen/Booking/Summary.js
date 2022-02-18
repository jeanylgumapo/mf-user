import React, {useState} from 'react';
import {Text, View,Image, Modal, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import DatePicker from 'react-native-datepicker';
import { Input, Button,  } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
 
const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Cash',
    value: '0'
}, {
    id: '2',
    label: 'Gcash',
    value: '1'
}, {
    id: '3',
    label: 'Debit/Credit',
    value: '2'
}
]

const SummaryScreen = ({navigation}) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        console.log(radioButtons);
    }
    const [check2, setCheck2] = useState(false);
    // const [package, setPackage]=useState('Select Item...');
    const [date, setDate] = useState('09-10-2020');
    const [isModalVisible, setisModalVisible]= useState(false);
    const changeModalVisibility=(bool) => {
        setisModalVisible(bool)
    }
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
          const [selected, setSelected] = useState([]);
  
          
          const _renderItem = item => {
              return (
              <View >
                  <Text>{item.label}</Text>
              </View>
              );
          };
  
  
          const [showDatePicker, setShowDatePicker] = useState(false)
  
          const openDatePicker = () => {
            setShowDatePicker(true)
          }
        
          const onCancel = () => {
            // You should close the modal in here
            setShowDatePicker(false)
          }
        
          const onConfirm = ( date ) => {
            // You should close the modal in here
            setShowDatePicker(false)
            
            
            // The parameter 'date' is a Date object so that you can use any Date prototype method.
            console.log(date.getDate())
          }
    return (
        <View style={tailwind`flex h-full bg-white`}>
            <ScrollView>
            <View style={tailwind`flex-row m-2`}>
                <Text style={tailwind`font-bold text-lg`}> Booking Details</Text>
            </View>
            <View>
                <View style={tailwind`flex items-center`}>
                    <View style={tailwind`flex-row p-4 `}>
                    <Image style={tailwind`rounded-20 w-16 h-16`} source ={require('../../../assets/car.png')}/>
                            <View style={tailwind`flex-col`}>
                                <Text style={tailwind`font-bold text-base text-left`}>Toyota Fortuner 2017</Text>
                                {/* <View  style={tailwind`flex-row`}>
                                    <AntDesign name="star" size={14} color="yellow" />
                                    <AntDesign name="star" size={14} color="yellow" />
                                    <AntDesign name="star" size={14} color="yellow" />
                                    <FontAwesome name="star-half-empty" size={14} color="yellow" />
                                    <FontAwesome name="star-o" size={14} color="yellow" />
                                </View>                     */}
                                 <View style={tailwind`flex-row items-center`}>
                                    <Text style={tailwind`text-xs text-gray-600`}>Vehicle ID </Text><Text style={tailwind`text-primary-color text-sm mx-2`}>#1013-221</Text>
                                </View>
                                <Text style={tailwind`text-xs text-gray-600`}>Last Services: June 2021</Text>
                            </View>
                        </View>
                </View>
                <View style={tailwind`p-4 border-2 m-4 border-gray-100 rounded-2xl`}>
                <Text style={tailwind`font-bold my-2`}> You booked</Text>
                    <Dropdown
                        style={tailwind`border-b-2 border-gray-100  px-2 rounded-lg m-4`}
                        data={data}
                        search
                        searchPlaceholder="Select Car Model"
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholderStyle={tailwind`text-sm text-gray-600`}
                        placeholder="Major Service"
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
              {/* <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose ={() => changeModalVisibility(false)}
                >
                </Modal>
                 */}                   
                    <View style={tailwind`px-4`}>
                        <Text style={tailwind`text-xs`}>Selected Date</Text>
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
                            <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg m-4`}
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
                    <View style={tailwind`py-4  border-2 rounded-2xl border-gray-100 px-8 mx-4`}>
                        <Text style={tailwind`text-right text-gray-600 text-xs`}>edit</Text>
                       
                     
                
                            <Text>Address</Text>
                            <Input
                                style={tailwind`text-xs`}
                                placeholder='Address'
                                // errorStyle={{ color: 'red' }}
                                // errorMessage='ENTER A VALID ERROR HERE'
                                // value={email}
                                // onChangeText={text=> setEmail(text)}
                            />
                
                        <Text>Contact No:</Text>
                        <Input
                            style={tailwind`text-xs`}
                            placeholder='Phone number'
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                         <Text>Recepient</Text>
                         <Input
                            style={tailwind`text-xs`}
                            placeholder='Recepient'
                            // errorStyle={{ color: 'red' }}
                            // errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                        {/* <Text style={tailwind`text-xs text-center m-1 text-gray-400`}>By booking this appointment you agree to the T& C</Text> */}
                </View>  
                <View style={tailwind`px-8 border-2 m-4 rounded-2xl border-gray-100`}>                    
                        <Text style={tailwind`text-base font-bold text-black pt-4`}>Additional Services</Text>                          
                   <View>
                        <Dropdown
                                // style={tailwind`border-2 border-gray-100  px-2 rounded-lg m-4`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm text-gray-600`}
                                placeholder="Select Services"
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
                            <TouchableOpacity style={tailwind`absolute right-0`}><Text>add</Text></TouchableOpacity>
                            <View style={tailwind`mx-4`}>
                                <Text style={tailwind`italic text-xs text-gray-600`}>Oil Change</Text>
                                <Text style={tailwind`italic text-xs text-gray-600`}>Cleaning</Text>
                            </View>
                            <Text style={tailwind`mt-4 text-xs text-gray-600`}>Promo Code</Text>
                            <Input
                                style={tailwind`text-xs`}
                                placeholder='Enter Promo Code'
                                // errorStyle={{ color: 'red' }}
                                // errorMessage='ENTER A VALID ERROR HERE'
                                // value={email}
                                // onChangeText={text=> setEmail(text)}
                            />
                   </View>
                </View>      
            </View>
            <View style={tailwind`m-4`}>
                <Text style={tailwind`font-bold text-base`}>Add Additional Note</Text>
                <Input
                    style={tailwind`text-xs`}
                    placeholder='Add not to mechanic'
                    // errorStyle={{ color: 'red' }}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    // value={email}
                    // onChangeText={text=> setEmail(text)}
                />                
            </View> 
            <View style={tailwind`items-start flex-col mb-24 px-4`}>
                <Text>Payment Methods</Text>
                <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={onPressRadioButton} 
                    containerStyle={tailwind`items-start`}
                    // layout='row'                                              
                    />
            </View>            
            </ScrollView>               
            <View style={tailwind`bottom-0 absolute flex-row w-full px-4 items-center py-4 bg-white drop-shadow border-t-2 border-gray-50`}>
                    <View style={tailwind`w-2/4 items-start`}>
                        <Text style={tailwind`text-gray-400 text-base`}>Total Payment</Text>
                        <Text style={tailwind`font-bold text-black text-lg`}>February 25, 9AM</Text>
                    </View>
                    <View style={tailwind`w-2/4 items-end `}>
                        <Button                                         
                            title='Proceed' 
                            onPress={() => 
                                // {login(email, password, navigation, 'cu')} 
                                { navigation.navigate('Confirmation' )}
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

export default SummaryScreen;