import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { FormLabel, Text,FormInput, FormValidationMessage,Button } from 'react-native-elements'
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
		  EmailValdate:true,
		  RePasswordValdate:true,
		}
	};
	
		validate (text,type){
			alph=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
			password='123'
			if(type=='EmailText'){
				if(alph.test(text)){
					this.setState({
					EmailValdate:true,
					})
				}
				else{
					this.setState({
					EmailValdate:false,
					})
				}
			}
			
			else if(type=='RePassword'){
				if(text==password){
					this.setState({
					RePasswordValdate:true,
					})
				}
				else{
					this.setState({
					RePasswordValdate:false,
					})
				}
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
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
				
			
					<FormLabel>{this.state.PasswordText}</FormLabel>
					
					
					<TextInput secureTextEntry={true}
						onChangeText={(text) => this.validate(text,'Password')}
						placeholder={this.state.PasswordText}
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.RePasswordText}</FormLabel>
					
					<TextInput secureTextEntry={true}
						onChangeText={(text) => this.validate(text,'RePassword')}
						
						placeholder={this.state.RePasswordText}
						style={[styles.inputStyle,!this.state.RePasswordValdate?styles.error:null]}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.DoBText}</FormLabel>
					
					<TextInput
						placeholder={this.state.DoBText}
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.SexText}</FormLabel>
					
					<Picker
					  selectedValue={this.state.language}
					  style={{ height: 30, width: 100,borderBottomWidth: 1 }}
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
						   style={{height: 40,width: 200,borderColor: 'gray', borderBottomWidth: 1}}
						/>
					
					<FormLabel>{this.state.EmailText}</FormLabel>
						<TextInput
						  placeholder={this.state.EmailText}
						  onChangeText={(text) => this.validate(text,'EmailText')}
						  keyboardType='email-address'
						  value={this.state.email}
						  style={
						  [styles.inputStyle,!this.state.EmailValdate?styles.error:null]}
						/>
				
					<FormLabel>{this.state.AddressText}</FormLabel>
					
					<TextInput
						placeholder={this.state.AddressText}
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.TownText}</FormLabel>
					
					<TextInput
						placeholder={this.state.TownText}
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
					<FormLabel>{this.state.TownshipText}</FormLabel>
					
					<TextInput
						placeholder={this.state.TownshipText}
						style={{height: 40,width: 200, borderColor: 'gray', borderBottomWidth: 1}}
						onChangeText={(text) => this.setState({text})}
					/>
					
				<Button
				  onPress={this.onPressLearnMore}
				  title="Đăng ký"
				  buttonStyle={{height: 40,width: 200,backgroundColor:'#17A2B8',marginTop:20}}
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
	},
	error:{
		borderBottomWidth:1,
		borderColor:'red',
	},
	inputStyle: {
		height: 40,
		width: 200,
		borderColor: 'gray', 
		borderBottomWidth: 1,
	}
	
})
