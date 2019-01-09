import React, {Component} from "react";
import{View, Text, StyleSheet,ScrollView,Button,Picker} from "react-native";
import { AppRegistry, TextInput } from 'react-native';

export class CartScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Đăng ký",
		  UserText: 'Tên tài khoản',
		  PasswordText: 'Mật khẩu',
		  RePasswordText: 'Nhập mật khẩu',
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
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
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
					<Text style={styles.UserText}>{this.state.PasswordText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput secureTextEntry={true}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.UserText}>{this.state.RePasswordText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput secureTextEntry={true}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
				<View  style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 1}}>
					<Text style={styles.UserText}>{this.state.DoBText}</Text>
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
					<Text style={styles.UserText}>{this.state.SexText}</Text>
					</View>
					<View style={{flex: 2}}>
					<Picker
					  selectedValue={this.state.language}
					  style={{ height: 30, width: 100 }}
					  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
					  <Picker.Item label="Male" value="Male" />
					  <Picker.Item label="Female" value="Female" />
					</Picker>
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
					<Text style={styles.UserText}>{this.state.TownText}</Text>
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
					<Text style={styles.UserText}>{this.state.TownshipText}</Text>
					</View>
					<View style={{flex: 2}}>
					<TextInput secureTextEntry={true}
						style={{height: 40,width: 200, borderColor: 'gray', borderWidth: 1,marginBottom:10}}
						onChangeText={(text) => this.setState({text})}
					/>
					</View>
				</View>
				<Button
				  onPress={this.onPressLearnMore}
				  title="Đăng ký"
				  color="#841584"
				/>
			</View>
			 </ScrollView>
		);
	}
}
export default CartScreen;

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
