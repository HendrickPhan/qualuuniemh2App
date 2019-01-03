import React, {Component} from "react";
import{View, Text, StyleSheet} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';

export class LoginScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Đăng nhập",
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
				<Text style={styles.UserText}>{this.state.UserText}</Text>
				<TextInput
					style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
					onChangeText={(text) => this.setState({text})}
				/>
				<Text style={styles.PasswordText}>{this.state.PasswordText}</Text>
				<TextInput secureTextEntry={true}
					style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
					onChangeText={(text) => this.setState({text})}
				/>
				<Button
				  onPress={this.onPressLearnMore}
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
