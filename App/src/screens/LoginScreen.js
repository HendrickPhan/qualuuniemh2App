import React, {Component} from "react";
import{View, Text, StyleSheet} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { AsyncStorage } from "react-native"
import Config from "./../config"

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

		  let url = Config.SERVER_URL + "/api/login";
		  fetch(url, {
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
				<View>
					<Text style ={styles.titleText}>{this.state.titleText}</Text>
					<TextInput
						style={styles.UserText}
						onChangeText={(text) => this.setState({username: text})}
						 placeholder={this.state.UserText}
					/>
					<TextInput secureTextEntry={true}
						style={styles.PasswordText}
						onChangeText={(text) => this.setState({password: text})}
						placeholder={this.state.PasswordText}
					/>
				</View>
				<View style={styles.button}>
				<Button
					textStyle={{
					fontSize: 25,}}
				  onPress={this.onPressLogin}
				  title="Đăng nhập"
				  backgroundColor="#17A2B8"		 
				/>
				</View>
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
		color: '#17A2B8',
		marginBottom:50,
		textAlign:'center',
	},
	PasswordText: {
		height: 60,
		width: 300, 
		borderColor: 'gray', 
		borderWidth: 1,
		marginBottom:10,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom:10,
	},
	UserText: {
		height: 60,
		width: 300, 
		borderColor: 'gray', 
		borderWidth: 1,
		marginBottom:10,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom:10,
	},
	button:{
		marginTop:50,
		height: 60,
		width: 330,	
	}

})
AppRegistry.registerComponent('AwesomeProject', () => LoginScreen);
