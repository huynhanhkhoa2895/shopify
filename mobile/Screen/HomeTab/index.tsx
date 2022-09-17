import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home"
import Contact from "./Contact"
import Policy from "./Policy"
import History from "./History"

import {css} from "../../config";
import {Text} from "react-native"
const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,

                tabBarIcon: ({focused, color, size}) => {
                    let iconName: string = "";

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Policy') {
                        iconName = focused ? 'book' : 'book-outline';
                    }else if (route.name === 'History') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }else if (route.name === 'Contact') {
                        iconName = focused ? 'call' : 'call-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={"#fff"}/>;
                },
                // tabBarShowLabel: false,
                tabBarActiveTintColor: '"#fff"',
                tabBarInactiveTintColor: '"#fff"',
                tabBarActiveBackgroundColor: css.color,
                tabBarInactiveBackgroundColor: css.color,
                tabBarLabel: () => {
                    let title: string = route.name
                    if (route.name === 'History') {
                        title = "Lịch sử";
                    } else if (route.name === 'Policy') {
                        title = "Chính sách";
                    } else if (route.name === 'Contact') {
                        title = "Liên hệ";
                    }
                    return <Text style={{color: "#fff", fontSize: 11}}>{title}</Text>
                }
            })}

        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="History" component={History}/>
            <Tab.Screen name="Policy" component={Policy}/>
            <Tab.Screen name="Contact" component={Contact}/>
        </Tab.Navigator>
    );
}