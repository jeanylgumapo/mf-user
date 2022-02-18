import React, {useState} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import {Dropdown} from 'react-native-element-dropdown';

const EditVehicle = () => {
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
        <View>
            <View style={tailwind`mx-4`}>
                <View style={tailwind`my-2`}>
                    <Text style={tailwind`text-sm text-gray-600`}>Car Make</Text>
                    <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm`}
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
                    </View>
                
                    <View style={tailwind`my-2`}>
                    <Text style={tailwind`text-sm text-gray-600`}>Car Model</Text>
                    <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm`}
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
                    </View>
                    <View style={tailwind`my-4`}>
                    <Text style={tailwind`text-sm text-gray-600`}>Year Model</Text>
                    <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm`}
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
                    </View>
                    <View style={tailwind`my-4`}>
                    <Text style={tailwind`text-sm text-gray-600`}>Transmission</Text>
                    <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm`}
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
                    </View>
                    <View style={tailwind`my-4`}>
                    <Text style={tailwind`text-sm text-gray-600`}>Fuel Type</Text>
                    <Dropdown
                                style={tailwind`border-2 border-gray-100  px-2 rounded-lg`}
                                data={data}
                                search
                                searchPlaceholder="Select Car Model"
                                labelField="label"
                                valueField="value"
                                label="Dropdown"
                                placeholderStyle={tailwind`text-sm`}
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
                    </View>
                        
            </View>
        </View>
    )
};

export default EditVehicle;