import React, {Component} from "react";
import{
	View, 
	Text, 
	StyleSheet,
	ActivityIndicator, 
	ScrollView,
	TouchableOpacity,
	ListView, 
	FlatList
} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { AsyncStorage } from "react-native"
import Config from "./../config"
import { ItemPreview } from "./../components/ItemPreview";
import { createStackNavigator, createAppContainer } from 'react-navigation';
export class ListProductScreen extends Component{
	constructor(props) {
		// lay tham so duoc truyen
			
		super(props);
		this.state = {
			isLoading: true,
			mathangs: [],
		};
	}
	
	onPressMatHang = (id) => {
		this.props.navigation.navigate('SingleProduct',{id: id})
	}
	
	componentDidMount(){
		const { navigation } = this.props;
		const id = navigation.getParam('id', '-1');
		
		let url = Config.SERVER_URL + "/api/listMatHang/" + id;
		return fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				mathangs: responseJson.mathang,
			}, function(){
			});
			
		})
		.catch((error) =>{
			console.error(error);
		});
	}
	
	renderItem = ({item}) =>{
		return(
			<TouchableOpacity onPress={() => this.onPressMatHang(item.id)}>
				<ItemPreview image={item.HinhAnh}
				ten={item.TenMatHang}
				gia={item.Gia}
				xuatXu={item.XuatXu}
				id={item.id}
				/>
			</TouchableOpacity>
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
				<FlatList 
					data={this.state.mathangs}
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
	}
})
export default ListProductScreen;

