import React, {Component} from "react";
import{View, Text, StyleSheet,ActivityIndicator, ScrollView} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { AsyncStorage } from "react-native"
import Config from "./../config"

import { ItemPreview } from "./../components/ItemPreview";
export class ListProductScreen extends Component{
	constructor(props) {
		// lay tham so duoc truyen
			
		super(props);
		this.state = {
			isLoading: true,
			mathangs: '',
		};
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
				mathangs: responseJson,
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

const styles = StyleSheet.create({
	container:{
		
		alignItems: 'flex-start',
		justifyContent: 'center'
	}
})
export default ListProductScreen;

