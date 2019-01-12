import React, {Component} from "react";
import { createStackNavigator, createAppContainer,NavigationEvents } from 'react-navigation';
import { LoginScreen } from './LoginScreen';
import { Text,Button } from 'react-native-elements'
import{View, 
	Alert,
	StyleSheet, 
	ScrollView, 
	ActivityIndicator,
	TouchableOpacity,
	AppRegistry, 
	TextInput, 
	AsyncStorage ,
	Image,
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
			 <ScrollView contentContainerStyle={styles.contentContainer}>
				<Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
				<View style={styles.container}>
					<Text style ={styles.titleText}>Hồ sơ</Text>	
						<View  style={{flex: 2, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Họ và tên:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.HoVaTen}</Text>
						</View>
						<View  style={{flex: 2, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Email:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.email}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Ngày sinh:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.NgaySinh}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Số điện thoại:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.SoDienThoai}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Giới tính:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.GioiTinh}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Địa chỉ:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.DiaChi}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Thành phố:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.ThanhPho}</Text>
						</View>
						<View  style={{flex: 1, flexDirection: 'row'}}>
							<View style={styles.inputtext}>
							<Text style={styles.StyleText}>Quận:</Text>
							</View>
							<Text style={styles.UserText}>{this.state.info.Quan}</Text>
						</View>
						<View style={styles.button}>	
							<Button 
								title="Đăng Xuất"
								backgroundColor="#ffab23"	
								textStyle={{fontSize: 25,}}
								onPress={() => this.logout()}>
							</Button>
						</View>
					</View>
			</ScrollView>
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
const styles = StyleSheet.create({
	container:{
		flex:1,	
		alignItems: 'center',
		justifyContent: 'flex-start'
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
		marginTop:30,
		marginBottom:30,
		height: 60,
		width: 330,	
	},
	StyleText:{
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		paddingTop:5,
		marginRight:10,
	},
	inputtext:{
		width:120,
		paddingLeft:5,
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
export default UserScreen;