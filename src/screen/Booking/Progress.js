import React, {useState} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import { AntDesign, Ionicons, FontAwesome,MaterialIcons   } from '@expo/vector-icons';
import StepIndicator from 'react-native-step-indicator';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const {width, height}=Dimensions.get("window");
const labels = ["Confirmation","Preparation","Arrival","Begin Job"];
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#fe7013',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: '#fe7013',
    
};




const ProgressScreen = () => {
    console.disableYellowBox = true;
    const [currentPosition, setCurrentPosition]=useState(0);
    const data =[
        {
            label: 'Confirmation',
            status: 'Booking has been confirmed',
            dateTime: 'Sat, 3rd Nov 11:49pm'
        },
        {
            label: 'Preparation',
            status: 'Mechanic prepare the tools needed',
            dateTime: 'Sat, 3rd Nov 11:49pm'
        },
        {
            label: 'Arrival',
            status: 'Arriving at the location',
            dateTime: 'Sat, 3rd Nov 11:49pm'
        },
        {
            label: 'Begin Job',
            status: 'Mechanic started working',
            dateTime: 'Sat, 3rd Nov 11:49pm'
        }
    ]
    return (
        <View style={tailwind`h-full bg-white flex`}>
            <ScrollView>
                <View>
                    <View style={tailwind`m-4 `}>
                    <Image style={tailwind`w-full rounded h-44  `} source ={require('../../../assets/map.jpg')}/> 
                    </View>
                    <View style={tailwind`items-center bg-white shadow-lg m-4  rounded-2xl  p-4`}>
                        <View style={tailwind`flex-row items-center`}>
                        <Image style={tailwind` rounded bg-primary w-24 h-24 m-4 `} source ={require('../../../assets/user.png')}/> 
                        <View style={tailwind`ml-2`}>
                            <Text style={tailwind`font-bold text-base`}> Eddie Gendraule</Text>
                            <Text style={tailwind`text-xs text-gray-600`}>Mechanic, 41</Text>
                            <Text style={tailwind`text-xs text-gray-600`}>Davao City, Philippines</Text>
                            <View style={tailwind`flex-row`}>
                                <AntDesign name="star" size={14} color="yellow" />
                                <AntDesign name="star" size={14} color="yellow" />
                                <AntDesign name="star" size={14} color="yellow" />
                                <FontAwesome name="star-half-empty" size={14} color="yellow" />
                                <FontAwesome name="star-o" size={14} color="yellow" />
                            </View>
                            <View style={tailwind`items-start`} ><Text style={tailwind`p-1 rounded text-xs text-white bg-green-400 rounded `}>Confirmed</Text></View>                    
                        </View>
                        </View>
                        <TouchableOpacity style={tailwind`bg-white border-2 border-gray-50 shadow-lg rounded-lg px-2 py-2 w-full items-center`}>
                                <View style={tailwind`flex-row items-center bg-white `}><Ionicons name="chatbox-outline" size={24} color="gray" /><Text style={tailwind`text-base text-gray-400 mx-2`}>Chat With your Mechanic</Text><View style={tailwind`bg-green-400 rounded p-1 mx-2`}><Ionicons name="ios-call" size={24} color="white" /></View></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tailwind`mx-4 border-2 p-4 border-gray-50 rounded-2xl drop-shadow`}>
                    <Text style={tailwind`font-bold text-lg`}>Work in Progress</Text>
                    <View style={tailwind`h-64 items-start py-4`}>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            labels={labels}
                            direction="vertical"
                            renderLabel={({position, stepStatus, label, currentPosition})=>{
                                return(
                                    <View style={tailwind`flex items-start`}>
                                        <Text style={tailwind`text-left items-start`}>{data[position].label}</Text>
                                        {/* <Text>{data[position].status}</Text>
                                        <Text>{data[position].dateTime}</Text> */}
                                    </View>
                                )
                            }}
                        />
                           {/* <ProgressSteps>
                            <ProgressStep label="First Step">
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 1!</Text>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="Second Step">
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 2!</Text>
                                </View>
                            </ProgressStep>
                            <ProgressStep label="Third Step">
                                <View style={{ alignItems: 'center' }}>
                                    <Text>This is the content within step 3!</Text>
                                </View>
                            </ProgressStep>
                        </ProgressSteps> */}
                    </View>
                    <View style={tailwind`border-t-2 py-2 border-gray-100 mx-4`}>
                        <Text style={tailwind`text-base text-gray-600`}>Estimated Arrival Time</Text>
                        <Text style={tailwind`font-bold text-lg`}>2:09 pm- 2:30 PM</Text>
                    </View>
                </View>
                    <View style={tailwind`p-4 border-2 mx-4 my-4 rounded-2xl border-gray-50`}>
                        <Text style={tailwind`text-gray-600 text-sm`}>Service Type</Text>
                        <View style={tailwind`flex-row ml-8`}>
                            <Text style={tailwind`text-base font-bold`}>Major Service</Text>
                            <Text style={tailwind`right-0 absolute text-base font-bold`}>JO # 1101-122</Text>                    
                        </View>
                        <View style={tailwind`flex-row`}>
                            <Text style={tailwind`text-base text-gray-600`}>Total Amount</Text>
                            <Text style={tailwind`right-0 absolute text-base`}>Php 1800.00</Text>                    
                        </View>
                    <View>
                        <TouchableOpacity style={tailwind`p-1`}>
                            <View style={tailwind`flex-row`}>
                                <Text style={tailwind`text-primary-color text-lg font-bold text-left`}>View Order Summary</Text>
                                <AntDesign style={tailwind`right-0 absolute`} name="arrowright" size={24} color="#3376B2" />                           
                            </View>
                            {/* <Text style={tailwind`text-primary-color text-lg font-bold`}>View Order Summary</Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default ProgressScreen;
