import React, {Component} from "react";
import{View, 
	Alert,
	Text, 
	StyleSheet, 
	ScrollView, 
	ActivityIndicator,
	Button,
	TouchableOpacity,
	AppRegistry, 
	TextInput, 
	AsyncStorage 
} from "react-native";
import Config from "./../config"
import ImageSlider from 'react-native-image-slider';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export class SingleProductScreen extends Component{
	
	static navigationOptions =({navigation}) =>( {
		headerTitle: "Mặt hàng",
		headerRight: (
		<TouchableOpacity onPress={() =>{navigation.navigate('Cart')}} >
				<Icon name="shopping-cart" size={25} color="#000" style={{marginRight: 10}}/>
		</TouchableOpacity>
		  
		),
	});
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			images: '',
			isLoading: true,
			userId: -1,
			cart: ''
		};
	}
	componentDidMount(){
		AsyncStorage.getItem('USER_ID', (err, result)=> {
			if(JSON.parse(result) != null){
				this.setState({user_id: JSON.parse(result)});
			}	
		});
		
		
		const { navigation } = this.props;
		const id = navigation.getParam('id', '-1');
		
		let url = Config.SERVER_URL + "/api/matHang/" + id;
		return fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				data: responseJson.data,
				images: responseJson.images,
			}, function(){
			});
			
			
		})
		.catch((error) =>{
			console.error(error);
		});
	}
	onPressMua = (matHang) => {
		/*AsyncStorage.clear();*/

		AsyncStorage.getItem('Cart', (err, result) => {
			let cart = JSON.parse(result);
			cart = cart == null ? [] : cart;
			let item = {
				userId: this.state.userId,
				id: matHang.id,
				tenMatHang: matHang.TenMatHang,
				gia: matHang.Gia,
				image: Config.SERVER_URL + this.state.images[0].url
			};
			cart.push(item);
			AsyncStorage.setItem('Cart', JSON.stringify(cart));
			
			Alert.alert('Thông báo','Thêm mặt hàng thành công',
				[
					{text: 'OK'},
				],
			);
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

		let images = [];
		let i;
		for (i = 0; i < this.state.images.length; i++) {
		  images.push(Config.SERVER_URL + this.state.images[i].url);
		}
		return (
			
			<View style={{flex:1}}>
				
			
				<ScrollView style={{flex:1}}>
					<View style={{height: 300}}>
						<ImageSlider images={images}/>
					</View>
					
					
					<Text style={{marginLeft: 10, fontSize: 50, fontWeight: 'bold', color: '#000'}}>{this.state.data.TenMatHang}</Text>
					<Text style={{marginLeft: 10, fontSize: 30,fontWeight: 'bold'}}>{this.state.data.Gia} VNĐ</Text>
					<Text style={{marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>Xuất xứ: </Text>
					<Text style={{marginLeft: 10, fontSize: 20}}>{this.state.data.XuatXu}</Text>
					<Text style={{marginLeft: 10, fontSize: 25, fontWeight: 'bold'}}>Mô tả: </Text>
					<Text style={{marginLeft: 10, fontSize: 20}}>{this.state.data.MoTa}</Text>
				
					<View style={{width: '50%', alignSelf: 'center', marginTop: 20,marginBottom: 20 }}>
						<Button
						  onPress={() => this.onPressMua(this.state.data)}
						  title="Thêm vào giỏ"
						  color="#ffab23"
						/>
					</View>
				</ScrollView>
			</View>
			
		
		
			
		);
	}
}
export default SingleProductScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'flex-start',
		justifyContent: 'center',

	},
	child:{
		
	}

})
