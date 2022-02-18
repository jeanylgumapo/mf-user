import React, { useState } from 'react';
import {Text, TouchableOpacity, View, Modal, TextInput, Button} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { Entypo } from '@expo/vector-icons';
import {Dropdown} from 'react-native-element-dropdown';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const MyGarageScreen = () => {
    const [modalOpen, setModalOpen]=useState(false);
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
        <View style={tailwind`flex h-full bg-white`}>
            <Modal visible={modalOpen}>
                <View style={tailwind`bg-primary p-4 flex-row`}>
                        <TouchableOpacity onPress={() => setModalOpen(false) } >
                            <EvilIcons name="close" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={tailwind`text-white font-bold text-base mx-2`}> Add New Car</Text>                       
                </View>
                <View style={tailwind`m-4`}>  
                    <View style={tailwind`items-center`}>
                        <FontAwesome name="upload" size={128} color="gray" />
                        <Button title="Upload Image"/>
                    </View>                                    
                        <Dropdown
                            style={tailwind`border-b-2 border-gray-100 py-2`}
                            data={data}
                            search
                            searchPlaceholder="Select Car Model"
                            labelField="label"
                            valueField="value"
                            label="Dropdown"
                            placeholder="Select Car Model"
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
                        <Text style={tailwind`font-bold text-base mt-4`}>Year</Text>
                        <Dropdown
                            style={tailwind`border-b-2 border-gray-100 py-2`}
                            data={data}
                            search
                            searchPlaceholder="Select Car Model"
                            labelField="label"
                            valueField="value"
                            label="Dropdown"
                            placeholder="Select Year"
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
                        <Text style={tailwind`font-bold text-base mt-4`}>Transmission</Text>
                        <Dropdown
                            style={tailwind`border-b-2 border-gray-100 py-2`}
                            data={data}
                            search
                            searchPlaceholder="Select Car Model"
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
                        <Text style={tailwind`font-bold text-base mt-4`}>Fuel Type</Text>
                        <Dropdown
                            style={tailwind`border-b-2 border-gray-100 py-2`}
                            data={data}
                            search
                            searchPlaceholder="Select Car Model"
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
                        <Button title="Add to My Garage"/>
                </View>
            </Modal>

            <View style={tailwind`m-2`}>
                <Text style={tailwind`font-bold text-2xl`}> My Garage</Text>   
                  
                    {/* <TextInput
                        // style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor='black'
                        // onChangeText={onSearch}
                        style={tailwind`border-b-2 my-2 border-gray-100 mx-2`}

                    /> */}
   
            </View>
            <View style={tailwind`border-b-2 border-gray-50 m-4 p-2`}>
                <View style={tailwind`flex-row items-center`}>
                    <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" />
                    <View style={tailwind`flex-col`}>
                        <View style={tailwind`flex-row`}>
                            <View style={tailwind`w-3/4 flex-row`}><Text style={tailwind`font-bold text-base`}>Toyota Wigo</Text><Text> 2021</Text></View>
                            <View 
                            // style={tailwind`w-1/4 items-end`}
                            ><TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                        </View>  
                        {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                        <View style={tailwind`flex-col`}>
                            <Text style={tailwind`text-sm italic text-gray-400`}>Automatic</Text>
                            <Text style={tailwind`text-sm italic text-gray-400`}>Diesel</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={tailwind`border-b-2 border-gray-50 m-4 p-2`}>
                <View style={tailwind`flex-row items-center`}>
                    <FontAwesome5 style={tailwind`mx-2`} name="car-side" size={32} color="gray" />
                    <View style={tailwind`flex-col`}>
                        <View style={tailwind`flex-row`}>
                            <View style={tailwind`w-3/4 flex-row`}><Text style={tailwind`font-bold text-base`}>Toyota Wigo</Text><Text> 2021</Text></View>
                            <View 
                            // style={tailwind`w-1/4 items-end`}
                            ><TouchableOpacity><Text>edit</Text></TouchableOpacity></View>
                        </View>  
                        {/* <Text style={tailwind`text-sm italic text-gray-400`}>2020</Text>               */}
                        <View style={tailwind`flex-col`}>
                            <Text style={tailwind`text-sm italic text-gray-400`}>Automatic</Text>
                            <Text style={tailwind`text-sm italic text-gray-400`}>Diesel</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={tailwind` bottom-0 m-2 right-0 items-end mx-8`}> 
                    <TouchableOpacity onPress={() => setModalOpen(true) } style={tailwind`bg-primary rounded-full items-center w-10 py-2 px-2`}>
                        <Entypo  name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
        </View>
    )
};

export default MyGarageScreen;