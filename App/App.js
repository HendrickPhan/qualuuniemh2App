/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { AsyncStorage } from "react-native"


class App extends Component{
	render(){
		return (
			 <Navigator/>
		);
	}
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
});



const MyDrawerNavigator = createDrawerNavigator({
  Home: {
        screen: HomeScreen
    },  
	Login: {
        screen: LoginScreen
    }
});
const TabNavigator2 = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Login: MyDrawerNavigator,
  
});
export default createAppContainer(TabNavigator2);


