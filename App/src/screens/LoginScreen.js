import React, {Component} from "react";
import{View, Text, StyleSheet,AppRegistry, TextInput,Image,AsyncStorage} from "react-native";
import { Button } from 'react-native-elements';
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
				AsyncStorage.setItem('USER_ID', JSON.stringify(responseJson.id));
				AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.token));	
			})
			 .catch((error) => {
			  console.error(error);
			});
		
	 }
	 onPressRegister=()=>{
		 this.props.navigation.navigate('Register');
	 }
	render(){
		return (
			<View style={styles.container}>
			 <Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
				<View>
					<Text style ={styles.titleText}>{this.state.titleText}</Text>
					<TextInput
						style={styles.UserText}
						onChangeText={(text) => this.setState({username: text})}
						 placeholder={this.state.UserText}
					/>
					<TextInput secureTextEntry={true}
						style={styles.UserText}
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
				  backgroundColor="#ffab23"		 
				/>
				
				</View>
				<View style={styles.button}>
				<Button
					textStyle={{
					fontSize: 25,}}
				  onPress={this.onPressRegister}
				  title="Đăng kí"
				  backgroundColor="#ffab23"		 
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
		color: 'white',
		marginBottom:50,
		textAlign:'center',
	},
	UserText: {
		height: 60,
		width: 300, 
		borderWidth: 1,
		borderRadius: 2,
		borderColor: 'white',
		borderBottomWidth: 0,
		shadowColor: 'white',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom:20,
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
	button:{
		marginTop:50,
		height: 60,
		width: 330,	
	},
	backgroundImage: {
		backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
	},

})
AppRegistry.registerComponent('AwesomeProject', () => LoginScreen);
