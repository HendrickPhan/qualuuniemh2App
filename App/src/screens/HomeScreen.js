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
	Image,
	ActivityIndicator,
	TouchableOpacity
	} from "react-native";

import { ItemPreview } from "./../components/ItemPreview";
import { ItemTypePreview } from "./../components/ItemTypePreview";
import Config from "./../config"
import { createStackNavigator, createAppContainer } from 'react-navigation';


export class HomeScreen extends Component{
	static navigationOptions = {
		tabBarLabel: 'Home!',
	  };
	
	onPressLoaiMatHang = (id) => {
		this.props.navigation.navigate('ListProduct',{id: id})
	}
	
	
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
		
				
				<Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
				<Image
				style={styles.headerBG}
				source={{uri: Config.SERVER_URL + "/upload/hp_big_img.jpg"}}
				/>
				
				<Text style={styles.titleText}>Loại mặt hàng: </Text>
				<View style={styles.loaiMatHangContainer}>
				{this.state.loaiMatHangs.map((loaiMatHangs, key) => {
					if(key <3){
					 return (
						 <TouchableOpacity onPress={() => this.onPressLoaiMatHang(loaiMatHangs.id)}>
							<ItemTypePreview 
							image={loaiMatHangs.hinhAnh}
							ten={loaiMatHangs.TenLoaiMatHang}
							key={key}
							id={loaiMatHangs.id}
							/>
						  </TouchableOpacity>
					 );
					}
				})}
				</View>
				<View  style={styles.loaiMatHangContainer}>
				{this.state.loaiMatHangs.map((loaiMatHangs, key) => {
					if(key >=3){
					 return (
						 <TouchableOpacity onPress={() => this.onPressLoaiMatHang(loaiMatHangs.id)}>
							<ItemTypePreview 
							image={loaiMatHangs.hinhAnh}
							ten={loaiMatHangs.TenLoaiMatHang}
							key={key}
							id={loaiMatHangs.id}
							/>
						 </TouchableOpacity>
					 );
					}
				})}
				</View>
				
				
				<Text style={styles.titleText}>Mặt hàng tiêu biểu: </Text>
				{this.state.mathangs.map((mathang, key) => {
					 return (
					
					 	<ItemPreview image={mathang.HinhAnh}
						ten={mathang.TenMatHang}
						gia={mathang.Gia}
						xuatXu={mathang.XuatXu}
						key={key}
						id={mathang.id}
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
		
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	headerBG:{
		width: '100%' ,
		height: 200,
		marginBottom: 20
		
	},
	loaiMatHangContainer:{
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
		margin:10,
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

