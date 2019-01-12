import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { FormLabel, Text,FormInput, FormValidationMessage,Button } from 'react-native-elements'
import Config from "./../config"
import { AsyncStorage } from "react-native"
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
		  gioitinh:'Nam',
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
		}
	onPressRegister= () => {
		var params= {
			username: this.state.username,
            password: this.state.password,
			password_confirmation:this.state.repassword,
			UserName: this.state.UserName,
			NgaySinh:  this.state.DoB,
			SoDienThoai:  this.state.Phone,
			GioiTinh: this.state.gioitinh,
			email:this.state.Email,
			DiaChi: this.state.Address,
			ThanhPho: this.state.Town,
			Quan: this.state.Township,
		}
		 let url = Config.SERVER_URL + "/api/register";
		  fetch(url, {
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				username: params.username,
				password: params.password,
				password_confirmation:params.password_confirmation,
				email: params.email,
				HoVaTen:  params.UserName,
				NgaySinh: params.NgaySinh,
				SoDienThoai: params.SoDienThoai,
				GioiTinh: params.GioiTinh,
				DiaChi: params.DiaChi,
				ThanhPho: params.ThanhPho,
				Quan: params.Quan,
			  }),
			}) .then((response) => response.json())
		
			.then((responseJson) => {
				alert(JSON.stringify(responseJson));
				if(JSON.stringify(responseJson.status==200)||JSON.stringify(responseJson.status==401)){
					AsyncStorage.setItem('USER_ID', JSON.stringify(responseJson.id));
					AsyncStorage.setItem('USER_TOKEN_', JSON.stringify(responseJson.token));	
					alert('Đăng kí thành công');
				}
				else{
					alert(JSON.stringify(responseJson.errors));
				}
			})
			 .catch((error) => {
			  console.error(error);
			});
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
						onChangeText={(text) => this.setState({repassword: text})}
						placeholder={this.state.RePasswordText}
						style={[styles.UserText,!this.state.RePasswordValdate?styles.error:null]}
					/>
					<TextInput
						style={styles.UserText}
						onChangeText={(text) => this.setState({UserName: text})}
						 placeholder={this.state.UserNameText}
					/>
					<TextInput
						style={styles.UserText}
						placeholder={this.state.DoBText}
						onChangeText={(text) => this.setState({DoB:text})}
					/>
					<Picker
					  selectedValue={this.state.gioitinh}
					  style={styles.UserText}
					  onValueChange={(itemValue, itemIndex) => this.setState({gioitinh: itemValue})}>
					  <Picker.Item label="Nam" value="Nam" />
					  <Picker.Item label="Nữ" value="Nữ" />
					  <Picker.Item label="Khác" value="Khác" />
					</Picker>
					<TextInput 
						placeholder={this.state.PhoneText}
						style={styles.UserText}
						keyboardType='numeric'
						value={this.state.myNumber}
						maxLength={10}  //setting limit of input
						style={styles.UserText}
						onChangeText={(text) => this.setState({Phone:text})}
					/>
					<TextInput
					  placeholder={this.state.EmailText}
					  onChangeText={(text) => this.validate(text,'EmailText')}
					  keyboardType='email-address'
					  value={this.state.email}
					  style={
					  [styles.UserText,!this.state.EmailValdate?styles.error:null]}
					  onChangeText={(text) => this.setState({Email:text})}
					/>
					<TextInput
						placeholder={this.state.AddressText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({Address:text})}
					/>					
					<TextInput
						placeholder={this.state.TownText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({Town:text})}
					/>
					<TextInput
						placeholder={this.state.TownshipText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({Township:text})}
					/>
					</View>
				<View style={styles.button}>	
					<Button
					  textStyle={{
						fontSize: 25,}}
					  onPress={this.onPressRegister}
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
