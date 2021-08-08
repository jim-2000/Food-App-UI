import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../const/colors';
import CartScreen from '../Screen/CartScreen'
import Favorite from '../Screen/Favorite';
//
const Tab = createBottomTabNavigator() 

//
const BottomNavigatior = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:COLORS.primary,
            tabBarStyle:[          
                {  
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                }                                
            ],
            headerShown:false        
          }}>
            <Tab.Screen component={HomeScreen} name="HomeScreen"
            options={{
                tabBarIcon:({color})=>(<Icon name="home" color={color} size={28} />)
            }}
            />
            <Tab.Screen component={HomeScreen} name="LocalMail"
            options={{
                tabBarIcon:({color})=>(<Icon name="local-mall" color={color} size={28} />)
            }}
            />
            <Tab.Screen component={HomeScreen} name="search"
            options={{
                tabBarIcon:({color})=>(
                    <View style={{
                        height: 60,
                        width: 60,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:COLORS.white,
                        borderColor:COLORS.primary,
                        borderWidth:2,
                        borderRadius:30,
                        top:-25,
                        elevation:5,

                    }}>
                        <Icon name="search" color={COLORS.primary} size={28} />
                    </View>
                )
            }}
            />
            <Tab.Screen component={Favorite} name="favorite"
            options={{
                tabBarIcon:({color})=>(<Icon name="favorite" color={color} size={28} />)
            }}
            />
            <Tab.Screen component={CartScreen} name="Cart"
            options={{
                tabBarIcon:({color})=>(<Icon name="shopping-cart" color={color} size={28} />)
            }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigatior

const styles = StyleSheet.create({})
