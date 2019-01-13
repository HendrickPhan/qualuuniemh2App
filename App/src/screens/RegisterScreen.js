import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Picker,Image} from "react-native";
import { AppRegistry, TextInput,Text} from 'react-native';
import { FormLabel,FormInput, FormValidationMessage,Button } from 'react-native-elements'
import Config from "./../config"
import { AsyncStorage } from "react-native"
import DatePicker from "react-native-datepicker"
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
		  date:'',	
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
	  <Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
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
					<View  style ={{flexDirection: "row"}}>
						<View style={{paddingTop:10,}}>
						<Text style={styles.DoBText}> Ngày sinh: </Text>
						</View>
						<DatePicker
							style={{width: 200}}
							 date={this.state.DoB}
							mode="date"
							placeholder="select date"
							format="YYYY-MM-DD"
							minDate="1950-05-01"
							maxDate="2019-01-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
							  dateIcon: {
								position: 'absolute',
								left: 0,
								top: 4,
								marginLeft: 0
							  },
							  dateInput: {
								marginLeft: 36
							  }
							}}
							onDateChange={(date) => {this.setState({DoB: date})}}
						/>

					</View>
					<View style={styles.UserText}>
					<Picker
					  selectedValue={this.state.gioitinh}
					  onValueChange={(itemValue, itemIndex) => this.setState({gioitinh: itemValue})}
					   style={{color:'#9A989E'}}>
					  <Picker.Item label="Nam" value="Nam" />
					  <Picker.Item label="Nữ" value="Nữ" />
					  <Picker.Item label="Khác" value="Khác" />
					</Picker>
					</View>
					<TextInput 
						placeholder={this.state.PhoneText}
						style={styles.UserText}
						keyboardType='numeric'
						value={this.state.myNumber}
						maxLength={10}
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
					  textStyle={{fontSize: 25,}}
					  onPress={this.onPressRegister}
					  title="Đăng ký"
					  backgroundColor="#ffab23"		
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
		color: 'white',
		marginTop:10,
		marginBottom:40,
		textAlign:'center',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowRadius: 20
	},
	UserText: {
		height: 60,
		width: 320, 
		borderWidth: 2,
		borderRadius: 2,
		borderColor: 'rgba(50,50,50,0.3)',
		shadowColor: 'white',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom:20,
		backgroundColor: 'rgba(255,255,255,0.6)',
		paddingLeft:22,
		
	},
	button:{
		marginTop:50,
		marginBottom:50,
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
	DoBText:{
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom:20,
		paddingLeft:15,
		color:'#9A989E',
	},
})
