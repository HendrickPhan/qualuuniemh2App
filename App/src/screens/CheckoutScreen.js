import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Button,Picker,Image,AsyncStorage} from "react-native";
import { AppRegistry, TextInput,Text} from 'react-native';
import {FormLabel} from 'react-native-elements';
import Config from "./../config"
export class CheckoutScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: 'Thanh toán',
		  UserText: 'Họ và tên',
		  PhoneText:'Số điện thoại',
		  EmailText:'Email',
		  AddressText:'Địa chỉ',
		  DateText:'Ngày giao hàng',
		  HoTen: '',
		  SoDienThoai: '',
		  Email: '',
		  DiaChi: '',
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
	onPressCheckout() {
		 var userInfo = {
            HoTen: this.state.HoTen,
            SoDienThoai: this.state.SoDienThoai,
            Email: this.state.Email,
            DiaChi: this.state.DiaChi,
        };
		var tongTien = this.props.navigation.getParam('tongTien',0);
		var cart = this.props.navigation.getParam('cart',[]);
		if(userInfo.HoTen=='' || userInfo.SoDienThoai=='' ||userInfo.Email=='' ||userInfo.DiaChi==''){
			return alert("Vui lòng nhập đầy đủ thông tin.");
		}
		
		
		let url = Config.SERVER_URL + "/api/checkout2";
		 fetch(url, {
			  method: 'POST',
			  headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
				userInfo: userInfo,
				tongTien: tongTien,
				cart: cart,
			  }),
			}) .then((response) => response.json())
			.then((responseJson) => {
				if(responseJson.status == 1){
					AsyncStorage.removeItem('Cart');
					this.props.navigation.navigate('Thanks');
				}
				else{
					alert(JSON.stringify(responseJson));
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
						placeholder={this.state.UserText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({HoTen: text})}
					/>
					
						<TextInput 
							placeholder={this.state.PhoneText}
							style={styles.UserText}
							keyboardType='numeric'
							value={this.state.myNumber}
							maxLength={10}  //setting limit of input
							onChangeText={(text) => this.setState({SoDienThoai: text})}
						/>
					
						<TextInput
							placeholder={this.state.EmailText}
							onChangeText={(text) => {this.validate(text);
							this.setState({Email: text})
							}}
							keyboardType='email-address'
							value={this.state.email}
							style={styles.UserText}
						/>
					
					<TextInput
						placeholder={this.state.AddressText}
						style={styles.UserText}
						onChangeText={(text) => this.setState({DiaChi: text})}
					/>
					
				</View>
				
					
					<View style={styles.button}>
						<Button
							textStyle={{
							fontSize: 25,}}
						  onPress={this.onPressCheckout.bind(this)}
						  title="Checkout"
							color="#ffab23"
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
		color: 'white',
		marginTop:10,
		marginBottom:40,
		textAlign:'center',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowRadius: 20,
		padding: 20
	},
	UserText: {
		height: 40,
		width: 250, 
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
		paddingLeft:20,
		paddingTop:5,
		
	},
	button:{
		marginTop:50,
		marginLeft:10,
		marginRight:10,
		height: 60,
		width: 200,	
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
AppRegistry.registerComponent('AwesomeProject', () => CheckoutScreen);
