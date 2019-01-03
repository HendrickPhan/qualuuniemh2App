import React, {Component} from "react";
import{View, Text, StyleSheet,ScrollView,Button,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

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
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<FormLabel style ={styles.UserText}>Name</FormLabel>
					<Text style={styles.UserText}>{this.state.UserText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.PhoneText}>{this.state.PhoneText}</Text>
					</View>
					<View style={{flex: 2}}>
						<TextInput 
						   style={styles.textInput}
						   keyboardType='numeric'
						   value={this.state.myNumber}
						   maxLength={10}  //setting limit of input
						/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.UserText}>{this.state.EmailText}</Text>
					</View>
					<View style={{flex: 2}}>
						<TextInput
						  placeholder="Email ID"
						  onChangeText={(text) => this.validate(text)}
						  keyboardType='email-address'
						  value={this.state.email}
						/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.UserText}>{this.state.AddressText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.UserText}>{this.state.DateText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
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
