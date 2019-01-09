import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';

export class RegisterScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Đăng ký",
		  UserText: 'Tên tài khoản',
		  PasswordText: 'Mật khẩu',
		  RePasswordText: 'Nhập lại mật khẩu',
		  UserNameText: 'Họ và tên',
		  DoBText:'Ngày sinh',
		  SexText:'Giới tính',
		  PhoneText:'Số điện thoại',
		  EmailText:'Email',
		  AddressText:'Địa chỉ',
		  TownText:'Thành phố',
		  TownshipText:'Quận',
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
					<FormLabel>{this.state.UserText}</FormLabel>
					
					<TextInput
						placeholder={this.state.UserText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
				
			
					<FormLabel>{this.state.PasswordText}</FormLabel>
					
					
					<TextInput secureTextEntry={true}
						placeholder={this.state.PasswordText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.RePasswordText}</FormLabel>
					
					<TextInput secureTextEntry={true}
						placeholder={this.state.RePasswordText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.DoBText}</FormLabel>
					
					<TextInput
						placeholder={this.state.DoBText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.SexText}</FormLabel>
					
					<Picker
					  selectedValue={this.state.language}
					  style={{ height: 30, width: 100 }}
					  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
					  <Picker.Item label="Male" value="Male" />
					  <Picker.Item label="Female" value="Female" />
					</Picker>
					
					<FormLabel>{this.state.PhoneText}</FormLabel>
					
						<TextInput 
							placeholder={this.state.PhoneText}
						   style={styles.textInput}
						   keyboardType='numeric'
						   value={this.state.myNumber}
						   maxLength={10}  //setting limit of input
						   style={{height: 40,width: 200,borderColor: 'gray', borderWidth: 1}}
						/>
					
					<FormLabel>{this.state.EmailText}</FormLabel>
				
						<TextInput
						  placeholder={this.state.EmailText}
						  onChangeText={(text) => this.validate(text)}
						  keyboardType='email-address'
						  value={this.state.email}
						  style={{height: 40,width: 200,borderColor: 'gray', borderWidth: 1}}
						/>
				
					<FormLabel>{this.state.AddressText}</FormLabel>
					
					<TextInput
						placeholder={this.state.AddressText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.TownText}</FormLabel>
					
					<TextInput
						placeholder={this.state.TownText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.TownshipText}</FormLabel>
					
					<TextInput
						placeholder={this.state.TownshipText}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					
				<Button
				  onPress={this.onPressLearnMore}
				  title="Đăng ký"
				/>
			
			</View>
			 </ScrollView>
		);
	}
}
export default RegisterScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

