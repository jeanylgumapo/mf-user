import React, {useState} from 'react';
import {Text, View,Image, Modal, StyleSheet, Button} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import DatePicker from 'react-native-neat-date-picker'
import { Input } from 'react-native-elements';

const PreConfirmationScreen = () => {
    // const [package, setPackage]=useState('Select Item...');
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
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
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
            <View style={tailwind`flex-row m-2`}>
                <View style={tailwind`w-2/4 items-start `}>
                    <Text> Booking Details</Text>
                </View>
                <View style={tailwind`w-2/4 items-end`}>
                    <View style={tailwind`flex-row`}>
                        <Text>Yourself</Text>
                        <Text>Other</Text> 
                    </View>                                  
                </View>
            </View>
            <View>
                <View style={tailwind`flex-row`}>
                <Image style={tailwind`rounded-20 w-10 h-10`} source ={require('../../../assets/user.png')}/> 
                    <View>
                        <Text>Eddie Gendraule</Text>
                        <View  style={tailwind`flex-row`}>
                            <AntDesign name="star" size={14} color="yellow" />
                            <AntDesign name="star" size={14} color="yellow" />
                            <AntDesign name="star" size={14} color="yellow" />
                            <FontAwesome name="star-half-empty" size={14} color="yellow" />
                            <FontAwesome name="star-o" size={14} color="yellow" />
                        </View>                    
                        <Text>Thank you for booking my services</Text>
                    </View>
                </View>
                <Text> You booked</Text>
                <Dropdown
                        style={styles.dropdown}
                        containerStyle={styles.shadow}
                        data={data}
                        search
                        searchPlaceholder="Search"
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholder="Select item"
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
                <TouchableOpacity onPress={() => changeModalVisibility(true)}><Text> edit</Text></TouchableOpacity>
                {/* <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose ={() => changeModalVisibility(false)}
                >

                </Modal>
                 */}
                    <Dropdown
                        style={styles.dropdown}
                        containerStyle={styles.shadow}
                        data={data}
                        search
                        searchPlaceholder="Search"
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholder="Select item"
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
                    <Button title={'open'} onPress={openDatePicker}/>
                    
                    <DatePicker
                        isVisible={showDatePicker}
                        mode={'single'}
                        onCancel={onCancel}
                        onConfirm={onConfirm}
                    />
                    <Dropdown
                        style={styles.dropdown}
                        containerStyle={styles.shadow}
                        data={data}
                        search
                        searchPlaceholder="Search"
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholder="Select item"
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
                     <Input
                            placeholder='Full Name'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                         <Input
                            placeholder='Full Name'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                         <Input
                            placeholder='Address'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />
                         <Input
                            placeholder='Contact No'
                            errorStyle={{ color: 'red' }}
                            errorMessage='ENTER A VALID ERROR HERE'
                            // value={email}
                            // onChangeText={text=> setEmail(text)}
                        />

                    
                    
                    
            </View>
        </View>
    )
};

export default PreConfirmationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});