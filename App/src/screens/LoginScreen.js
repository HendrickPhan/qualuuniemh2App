import React, {Component} from "react";
import{View, Text, StyleSheet} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { AsyncStorage } from "react-native"


export class LoginScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Đăng nhập",
		  UserText: 'Tên đăng nhập',
		  PasswordText: 'Mật khẩu',
		  userName: '',
		  password: '',
		  isLogged: false
		};
	}
	
		
	onPressLogin = () => {
		 var params = {
            username: this.state.username,
            password: this.state.password,
        };

		  
		  fetch('http://192.168.56.1:80/api/login', {
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				username: params.username,
				password: params.password,
			  }),
			}) .then((response) => response.json())
			.then((responseJson) => {
				alert(responseJson.token);
				let _storeData = async () => {
					await AsyncStorage.setItem('USER_TOKEN_', responseJson.token);
				}
				
				AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.token), () => {
					AsyncStorage.getItem('USER_TOKEN_', (err, result) => {
					  alert(result);
				  });
				});
				
			})
			 .catch((error) => {
			  console.error(error);
			});
		
	 }
	render(){
		return (
			<View style={styles.container}>
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
				<Text style={styles.UserText}>{this.state.UserText}</Text>
				<TextInput
					style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
					onChangeText={(text) => this.setState({username: text})}
				/>
				<Text style={styles.PasswordText}>{this.state.PasswordText}</Text>
				<TextInput secureTextEntry={true}
					style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
					onChangeText={(text) => this.setState({password: text})}
				/>
				<Button
				  onPress={this.onPressLogin}
				  title="Đăng nhập"
				  color="#841584"
				/>
				
			</View>
			
		);
	}
}
export default LoginScreen;

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
AppRegistry.registerComponent('AwesomeProject', () => LoginScreen);
