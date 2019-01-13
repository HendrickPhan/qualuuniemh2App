import React, {Component} from "react";
import{
	View, 
	Text, 
	StyleSheet,
	ScrollView,
	Button,
	AsyncStorage,
	ActivityIndicator,
	FlatList,
	TouchableOpacity,
	Image
} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationEvents } from "react-navigation";

export class CartScreen extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			uniqueNumber: 1,
			isLoading: true,
			userId: -1,
			cart: [],
			tongTien: 0
		}
	};
	componentDidMount(){
		
		this.refetch();
	}
	tinhTongTien(){
		let tong = 0;
		for (i = 0; i < this.state.cart.length; i++) {
		  tong+= this.state.cart[i].gia;
		}
		this.setState({tongTien: tong})
	}
	refetch(){
		AsyncStorage.getItem('USER_ID', (err, result)=> {
			if(JSON.parse(result) != null){
				this.setState({userId: JSON.parse(result)});
			}	
		});
		AsyncStorage.getItem('Cart', (err, result)=> {
			let cartItems = [];
			if(JSON.parse(result) != null){
				let items = JSON.parse(result);
				for(let i=0; i<items.length; i++){
					if(items[i].userId == this.state.userId){
						cartItems.push(items[i]);
					}
				}
			}	
			this.setState({
				cart: cartItems,
				isLoading: false
			});
			this.tinhTongTien();
		});
		
	}
	
	renderItem = ({item, index}) =>{
		return(
		<View style={{
				borderRadius: 4,
				borderWidth: 0.5,
				borderColor: '#d6d7da',
				flexDirection: 'row',
				padding: 10
		}}>
			<Image
			style={{width: 150, height: 100}}
			source={{uri: item.image}}
			/>
			<View style={{
				justifyContent: 'space-between',
				padding: 10
			}}>
				<Text>{item.tenMatHang}</Text>
				<Text>{item.gia} VNĐ</Text>
				<Text onPress={() =>this.deleteItem(index)}>Xóa</Text>
			</View>
		
		</View>
		
		
			
		)
	}	
	
	deleteItem(index){
		let _cart = this.state.cart;
		_cart.splice(index,1);
		AsyncStorage.setItem('Cart', JSON.stringify(_cart));
		this.refetch();
		
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
		<View style={{flex:1}}>
			<Image source={require('./img/background.jpg')} style={styles.backgroundImage}/>
			<ScrollView style={{flex:1}}>
				
				<NavigationEvents
				  onWillFocus={() => {
					this.refetch();
				  }}
				/>
				<FlatList 
					data={this.state.cart}
					renderItem={this.renderItem}
				/>
				<View style={{flexDirection: 'row', justifyContent:'flex-start', paddingTop:20}}>
					<Text style={{fontSize: 25}}>Tổng số tiền: </Text>
					<Text style={{fontSize: 25, fontWeight: 'bold', color:'#000'}}>{this.state.tongTien} VNĐ</Text>
				</View>
				<View style={{width: '50%', alignSelf: 'center', marginTop: 20,marginBottom: 20 }}>
					<Button
					  onPress={() => {this.props.navigation.navigate('Checkout',{cart: this.state.cart, tongTien: this.state.tongTien})}}
					  title="Đặt hàng"
					  color="#ffab23"
					/>
				</View>
			</ScrollView>
		</View>
		);
	}
}
const styles = StyleSheet.create({
	backgroundImage: {
		backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
		  resizeMode: 'cover', // or 'stretch',
	},
	container:{
		
		alignItems: 'flex-start',
		justifyContent: 'center'
	},

	
})
export default CartScreen;