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
					<TextInput secureTextEntry={true}
						style={styles.UserText}
						onChangeText={(text) => this.setState({password: text})}
						placeholder={this.state.RePasswordText}
						style={[styles.UserText,!this.state.RePasswordValdate?styles.error:null]}
					/>
					<TextInput
						style={styles.UserText}
						placeholder={this.state.DoBText}
						onChangeText={(text) => this.setState({text})}
					/>
					<Picker
					  selectedValue={this.state.language}
					  style={styles.UserText}
					  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
					  <Picker.Item label="Male" value="Male" />
					  <Picker.Item label="Female" value="Female" />
					</Picker>
					<TextInput 
						placeholder={this.state.PhoneText}
						style={styles.UserText}
						keyboardType='numeric'
						value={this.state.myNumber}
						maxLength={10}  //setting limit of input
						style={styles.UserText}
					/>
					<TextInput
					  placeholder={this.state.EmailText}
					  onChangeText={(text) => this.validate(text,'EmailText')}
					  keyboardType='email-address'
					  value={this.state.email}
					  style={
					  [styles.UserText,!this.state.EmailValdate?styles.error:null]}
					/>
					<TextInput
						placeholder={this.state.AddressText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>					
					<TextInput
						placeholder={this.state.TownText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>
					<TextInput
						placeholder={this.state.TownshipText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				<View style={styles.button}>	
					<Button
					  onPress={this.onPressLearnMore}
					  textStyle={{
						fontSize: 25,}}
					  onPress={this.onPressLogin}
					  title="Đăng ký"
					  backgroundColor="#17A2B8"		
					/>
				</View>
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
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: '#17A2B8',
		marginTop:10,
		marginBottom:40,
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
	},
	button:{
		marginTop:50,
		marginBottom:50,
		height: 60,
		width: 330,	
	}

	
})
