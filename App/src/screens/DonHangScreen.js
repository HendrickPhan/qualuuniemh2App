import React, {Component} from "react";
import{
	View, 
	Text, 
	StyleSheet,
	ActivityIndicator, 
	ScrollView,
	TouchableOpacity,
	ListView, 
	FlatList,
	Image
} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { AsyncStorage } from "react-native"
import Config from "./../config"
import { ItemPreview } from "./../components/ItemPreview";
import { createStackNavigator, createAppContainer } from 'react-navigation';
export class DonHangScreen extends Component{
	static navigationOptions =({navigation}) =>( {
		headerTitle: "Đơn hàng",
		
	});
	constructor(props) {
		// lay tham so duoc truyen
			
		super(props);
		this.state = {
			isLoading: true,
			donhangs: [],
		};
	}
	
	componentDidMount(){
		AsyncStorage.getItem('USER_TOKEN_', (err, result)=> {
				let url = Config.SERVER_URL + "/api/donhang";
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
						this.setState({
							isLoading: false,
							donhangs: responseJson,
						}, function(){
						});
				})
				.catch((error) =>{
					console.error(error);
				});
		});		
	}
	
	renderItem = ({item}) =>{
		return(
			<View style={{
				borderRadius: 4,
				borderWidth: 0.5,
				borderColor: '#d6d7da',
				padding: 10,
				marginBottom: 5,
				width: '100%'
			}}>
				<Text>Mã đơn hàng: {item.id} </Text>
				<Text>Ngày đặt hàng: {item.NgayDatHang}</Text>
				<Text>Ngày giao hàng: {item.NgayGiaoHang}</Text>
				<Text>Tổng tiền: {item.TongTien}</Text>
				<Text>Trạng thái: {item.TrangThai}</Text>
			</View>
		)
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
			<View style={styles.container}>
				<Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
				<FlatList 
					data={this.state.donhangs}
					renderItem={this.renderItem}
				/>
			</View>
		
			
		);
	}
}

const styles = StyleSheet.create({
	container:{
		marginTop: 10,
		alignItems: 'flex-start',
		justifyContent: 'center'
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
export default DonHangScreen;

