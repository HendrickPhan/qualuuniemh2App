import React, {Component} from "react";
import{View, Text, StyleSheet} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen } from './LoginScreen';


class HomeScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Trang chủ",
		  UserText: 'Tên đăng nhập',
		  PasswordText: 'Mật khẩu',
		};
	}
	onPressLearnMore() {
	}
	render(){
		return (
			<View style={styles.container}>
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
			</View>
			
		);
	}
}
//export default HomeScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'red',
		marginBottom:10,
	},
	PasswordText: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginLeft:110,
		marginBottom:10,
	},
	UserText: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginLeft:110,
		marginBottom:10,
	}
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: LoginScreen,
});


export default createAppContainer(TabNavigator);