import React, {Component} from "react";
import { createStackNavigator, createAppContainer,NavigationEvents } from 'react-navigation';
import { LoginScreen } from './LoginScreen';

import{View, 
	Alert,
	Text, 
	StyleSheet, 
	ScrollView, 
	ActivityIndicator,
	TouchableOpacity,
	AppRegistry, 
	TextInput, 
	AsyncStorage ,
	Button
} from "react-native";



import Config from "./../config";


export class UserScreen extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			action: 1,
			info: '',
			isLoading: true,
			
			userToken: '',
		};
	}
	
	
	logout(){
		
	
		AsyncStorage.removeItem('USER_TOKEN_');
		AsyncStorage.removeItem('USER_ID');
			let url = Config.SERVER_URL + "/api/logout";
			
			fetch(url,{
			  method: 'GET',
			  headers: {
				Accept: 'application/json',
				Authorization: 'Bearer ' + this.state.userToken,
				}
		})
		.catch((error) =>{
			console.error(error);
		});
		this.refetch();
		this.props.navigation.setParams({ loggedIn: false });
	}
	
	
	componentDidMount(){
		this.refetch();
	}
	
	
	refetch(){
		AsyncStorage.getItem('USER_TOKEN_', (err, result)=> {
			if(JSON.parse(result) != null){
			this.setState({userToken: JSON.parse(result)})
				let url = Config.SERVER_URL + "/api/user";
				let token = "Bearer " + JSON.parse(result);
				fetch(url,{
					  method: 'GET',
					  headers: {
						Accept: 'application/json',
						Authorization: token,
					}
				})
				.then((response) => response.json())
				.then((responseJson) => {
					console.log(responseJson);
					if(responseJson.errors.status == 401){
						this.logout();
						this.setState({
							loggedIn: false,
							isLoading: false,
						})
					}
					if(responseJson.errors.status == 200){
						this.setState({
							loggedIn: true,
							isLoading: false,
							info: responseJson.info
						}, function(){
						});
					}
				})
				.catch((error) =>{
					console.error(error);
				});
			}else{
				this.setState({
					isLoading: false,
					loggedIn: false
				})
			}
		});		
		
	}
	
	render(){
		const { navigation } = this.props;
		const loggedIn = navigation.getParam('loggedIn','');

		if(this.state.isLoading){
		  return(
			<View style={{flex: 1, padding: 20}}>
			  <ActivityIndicator/>
			  <NavigationEvents
				  onWillFocus={() => {
					this.refetch();
				  }}
				/>
			</View>
		  )
		}
		
		if(this.state.loggedIn == false && loggedIn!=true){
			this.props.navigation.navigate('Login');
		}
		if(this.state.loggedIn == true){
			return (
				<View>
					<Text>{this.state.info.HoVaTen}</Text>
					<Button 
					 title="Đăng Xuất"
					
					onPress={() => this.logout()}></Button>
				</View>
			)
		}
		return(
		
			<View style={{flex: 1, padding: 20}}>
				<NavigationEvents
				  onWillFocus={() => {
					this.refetch();
				  }}
				/>
			  <ActivityIndicator/>
			</View>
		)
	}
	
}

export default UserScreen;