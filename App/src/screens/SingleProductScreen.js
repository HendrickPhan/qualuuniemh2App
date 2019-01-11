import React, {Component} from "react";
import{View, Text, StyleSheet, ScrollView, ActivityIndicator,TouchableOpacity } from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import {Button } from 'react-native-elements';
import { AsyncStorage } from "react-native"
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
			isLoading: true
		};
	}
	componentDidMount(){
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
	onPressMua = (id) => {
		alert(id);
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
					
					<View style={styles.containertext}>
					<Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>{this.state.data.TenMatHang}</Text>
					<Text style={{marginLeft: 10, fontSize: 20}}>{this.state.data.Gia} VNĐ</Text>
					<Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Xuất xứ: </Text>
					<Text style={{marginLeft: 10, fontSize: 20}}>{this.state.data.XuatXu}</Text>
					<Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>Mô tả: </Text>
					<Text style={{marginLeft: 10, fontSize: 20}}>{this.state.data.MoTa}</Text>
					</View>
					<View style={styles.container}>
					<View style={styles.button}>
						<Button
							textStyle={{
							fontSize: 25,}}
							onPress={() => this.onPressMua(this.state.data.id)}
							title="Thêm vào giỏ"
							backgroundColor="#ffab23"
							accessibilityLabel="Learn more about this purple button"
						/>
					</View>
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
		alignItems: 'center',
		justifyContent: 'center'

	},
	child:{
		
	},
	button:{
		marginTop:50,
		marginBottom:20,
		height: 60,
		width: 330,	
	},
	containertext:{
		marginTop:20,
		marginLeft:20,
	},

})
