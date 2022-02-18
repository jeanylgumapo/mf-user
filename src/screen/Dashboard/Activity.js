import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import tailwind from 'tailwind-react-native-classnames';
import ActivityPanel from '../../panel/AcitivityPanel';
import UpdatePanel from '../../panel/UpdatesPanel';

    const notifTab=[
        {
            name:'Activities',
            key: '0'
        },
        {
            name: 'Updates',
            key: '1'
        }
    ]
const ActivityScreen = () => {
    const [isActivity, setisActivity]=useState(true);
    const [isUpdate, setisUpdate]=useState(false);
    const [isActive, setisActive]=useState(true);


    return (
        <View style={tailwind`h-full bg-white`}>
            {/* Header */}
            <View style={tailwind`flex`}>
                <View style={tailwind` w-full bg-white items-center rounded-b-2xl`}>
                    <View style={tailwind`flex-row `}>
                        {/* {
                            notifTab.map(e =>
                                
                                (
                                    <View style={tailwind`w-2/4`}>
                                       
                                        <TouchableOpacity onPress={() => setisActivity(true)} style={tailwind` items-center p-4  border-b-2 border-b-primary rounded-l-2xl`}>
                                            <Text style={tailwind`font-bold text-primary-color text-lg`}>{e.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )

                            )
                        } */}
                        {(function() {
                        if (isActivity==true && isUpdate==false) {
                            return (
                            <View style={tailwind`flex-row items-center `}>
                                 <View style={tailwind`  w-2/4 p-4 items-center border-b-2 border-b-primary rounded-l-2xl`}>
                                        <TouchableOpacity onPress={()=> setisActivity(true) && setisUpdate(false)}>
                                            <Text style={tailwind`font-bold text-primary-color text-lg`}>Confirmed</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={tailwind` w-2/4 p-4 items-center rounded-r-2xl`}>
                                        <TouchableOpacity onPress={()=> setisActivity(false) && setisUpdate(true)}>
                                            <Text  style={tailwind`font-bold text-gray-300 text-lg`}>Requests</Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                            )
                        } else {
                            return (
                                <View style={tailwind`flex-row items-center`}>
                                <View style={tailwind` w-2/4 p-4 items-center rounded-r-2xl`}>
                                       <TouchableOpacity onPress={()=> setisActivity(true) && setisUpdate(false)}>
                                           <Text style={tailwind`font-bold text-gray-300 text-lg`} >Confirmed</Text>
                                       </TouchableOpacity>
                                   </View>
                                   <View style={tailwind` w-2/4 p-4 items-center border-b-2 border-b-primary rounded-l-2xl`} >
                                       <TouchableOpacity onPress={()=> setisActivity(false) && setisUpdate(true)}>
                                           <Text style={tailwind`font-bold text-primary-color text-lg`} >Requests</Text>
                                       </TouchableOpacity>
                               </View>
                           </View>
                            )
                        }
                        })()}
                    </View>                    
                </View>                
            </View>
        {/* Body */}
            <View style={tailwind`p-4`}>
                {/* Acitivity */} 
                {
                isActivity?(
                        <ActivityPanel/>
                    ):
                    <UpdatePanel/>
                }
            </View>
        </View>
    )
};

export default ActivityScreen;