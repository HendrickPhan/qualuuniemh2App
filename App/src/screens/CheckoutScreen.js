import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Button,Picker} from "react-native";
import { AppRegistry, TextInput,Text} from 'react-native';
import {FormLabel} from 'react-native-elements';
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
				<View>
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
					<TextInput
						placeholder={this.state.UserText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>
					
						<TextInput 
							placeholder={this.state.PhoneText}
							style={styles.UserText}
							keyboardType='numeric'
							value={this.state.myNumber}
							maxLength={10}  //setting limit of input
						/>
					
						<TextInput
							placeholder={this.state.EmailText}
							onChangeText={(text) => this.validate(text)}
							keyboardType='email-address'
							value={this.state.email}
							style={styles.UserText}
						/>
					
					<TextInput
						placeholder={this.state.AddressText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<TextInput
						placeholder={this.state.DateText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>
				</View>
				
					
					<View style={styles.button}>
						<Button
							textStyle={{
							fontSize: 25,}}
						  onPress={this.onPressLearnMore}
						  title="Checkout"
						  backgroundColor="#17A2B8"		 
						/>
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
		color: '#17A2B8',
		marginBottom:50,
		marginTop:20,
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
		marginBottom:10,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
	},
	button:{
		marginTop:50,
		marginLeft:10,
		marginRight:10,
		height: 60,
		width: 200,	
	}
})
AppRegistry.registerComponent('AwesomeProject', () => CheckoutScreen);
