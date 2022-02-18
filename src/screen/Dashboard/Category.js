import React, { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import tailwind from 'tailwind-react-native-classnames';
import CategoryCard from '../../components/CategoryCard';

// const categories
const CategoryScreen = ({navigation}) => {
    const [categories, setCategories] =useState([
        {
            title: 'Maintenance',
            key: '1'
        },
        {
            title: 'CHange Oil',
            key: '2'
        },
        {
            title: 'Battery',
            key:'3'
        }
    ]);
    return (
        <View >
            <Text> Service Category</Text>
            <View style={tailwind`flex items-center  p-4`}>
                <View style={tailwind` flex-row flex-wrap `}>
                {
                            categories.map((item) => {
                                return (
                                    <View key={item.key}>
                                        {/* <Text>{item.title}</Text> */}
                                        <TouchableOpacity onPress={() => navigation.navigate('SubCategory')}>
                                            <CategoryCard label={item.title} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                </View>
                
            </View>
        </View>
    )
};

export default CategoryScreen;