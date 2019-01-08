import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Button,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { FormLabel, FormInput, Text,FormValidationMessage} from 'react-native-elements';

export class CheckoutScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: 'Thanh toán',
		  UserText: 'Họ và tên',
		  PhoneText:'Số điện thoại',
		  EmailText:'Email',
		  AddressText:'Địa chỉ',
		  DateText:'Ngày giao hàng'
		}
	};
	
		validate = (text) => {
			console.log(text);
			let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
			if(reg.test(text) === false)
			{
			console.log("Email is Not Correct");
			this.setState({email:text})
			return false;
			  }
			else {
			  this.setState({email:text})
			  console.log("Email is Correct");
			}
		}
	onPressLearnMore() {
	 }
	render(){
		return (
	 <ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.container}>
				<Text h1>{this.state.titleText}</Text>
				
					<FormLabel style ={styles.UserText}>{this.state.UserText}</FormLabel>
					
					<TextInput
						placeholder={this.state.UserText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel style ={styles.UserText}>{this.state.PhoneText}</FormLabel>
						<TextInput 
							placeholder={this.state.PhoneText}
						   style={styles.textInput}
						   keyboardType='numeric'
						   value={this.state.myNumber}
						   maxLength={10}  //setting limit of input
						   style={{height: 40,width: 200,borderColor: 'gray', borderWidth: 1}}
						/>
					
					<FormLabel style ={styles.UserText}>{this.state.EmailText}</FormLabel>
						<TextInput
							placeholder={this.state.EmailText}
						  onChangeText={(text) => this.validate(text)}
						  keyboardType='email-address'
						  value={this.state.email}
						  style={{height: 40,width: 200,borderColor: 'gray', borderWidth: 1}}
						/>
					
					<FormLabel style ={styles.UserText}>{this.state.AddressText}</FormLabel>
					<TextInput
						placeholder={this.state.AddressText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel style ={styles.UserText}>{this.state.DateText}</FormLabel>
					<TextInput
						placeholder={this.state.DateText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
				
				<View  style={{flexDirection: 'row'}}>
					<View style={{marginRight:10}}>
						<Button style={{width:50}}
						  onPress={this.onPressLearnMore}
						  title="Quay lại"
						  color="#6C757D"
						/>
					</View>
					<View style={{marginLeft:10}}>
						<Button style={{width:50}}
						  onPress={this.onPressLearnMore}
						  title="Check out"
						  color="#28A745"
						/>
					</View>
				</View>
				
			</View>
			 </ScrollView>
		);
	}
}
export default CheckoutScreen;

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
	UserText: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		paddingTop:10,
		marginBottom:10,
		paddingLeft:5,
	},
	PhoneText:{
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		paddingTop:10,
		marginBottom:10,
		paddingLeft:5,
	}
})
AppRegistry.registerComponent('AwesomeProject', () => CheckoutScreen);
