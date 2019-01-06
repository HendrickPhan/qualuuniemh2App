import React, {Component} from "react";
import{
	View, 
	Text, 
	ScrollView, 
	StyleSheet,
	Button,
	AsyncStorage,
	TextInput,
	AppRegistry,
	ActivityIndicator
	} from "react-native";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ItemPreview } from "./../components/ItemPreview";
import Config from "./../config"

export class HomeScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText: "Trang chủ",
		  UserText: 'Tên đăng nhập',
		  PasswordText: 'Mật khẩu',
		  isLoading: true,
		  mathangs: '',
		  loaiMatHangs: ''
		};
	}
	componentDidMount(){
		let url = Config.SERVER_URL + "/api/home";
		return fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
			  isLoading: false,
				loaiMatHangs: responseJson.loaiMatHangs,
				mathangs: responseJson.mathangs,
			}, function(){
			});
			
		})
		.catch((error) =>{
			console.error(error);
		});
	}
	
	
	
	
	onPressCheck = () => {
		AsyncStorage.getItem('USER_TOKEN_', (err, result) => {
					  alert(result);
				  });
	}
	onPressLearnMore() {
	}
	render(){
		if(this.state.isLoading){
		  return(
			<View style={{flex: 1, padding: 20}}>
			  <ActivityIndicator/>
			</View>
		  )
		}
		
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Text style ={styles.titleText}>{this.state.titleText}</Text>
				
				<Button
				  onPress={this.onPressCheck}
				  title="check"
				  color="#841584"
				/>
				{this.state.mathangs.map((mathang, key) => {
					 return (
					 	<ItemPreview image={mathang.HinhAnh}
						ten={mathang.TenMatHang}
						gia={mathang.Gia}
						xuatXu={mathang.XuatXu}
						key={key}
						/>
						
					 );
				  })}
			</ScrollView>
			
		);
	}
}
export default HomeScreen;

const styles = StyleSheet.create({
	container:{
		
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleText: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'red',
		marginBottom:10,
	},
	PasswordText: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginLeft:110,
		marginBottom:10,
	},
	UserText: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginLeft:110,
		marginBottom:10,
	}
})

