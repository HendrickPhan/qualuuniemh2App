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
	ImageBackground,
	Dimensions
} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { AsyncStorage } from "react-native"
import Config from "./../config"
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ListTypeOfProductScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			loaiMatHangs: [],
			searchKeyWord: '',
		};
	}
	
	onPressLoaiMatHang = (id) => {
		this.props.navigation.navigate('ListProduct',{id: id})
	}
	
	componentDidMount(){
		let url = Config.SERVER_URL + "/api/listLoaiMatHang/";
		return fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				loaiMatHangs: responseJson,
			}, function(){
			});
			
		})
		.catch((error) =>{
			console.error(error);
		});
	}
		
	renderItem = ({item}) =>{
		return(
			<TouchableOpacity onPress={() => this.onPressLoaiMatHang(item.id)} >

				<ImageBackground source={{uri: Config.SERVER_URL + item.hinhAnh}} style={{width:Dimensions.get('window').width / 2,height:Dimensions.get('window').width / 2}}>
					<View style={{position: 'absolute', width:'100%', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
						<Text style={styles.textStyle}>{item.TenLoaiMatHang}</Text>
					</View>
					
				  </ImageBackground>

			</TouchableOpacity>
		)
	}	
	
	searchPress(){
		this.props.navigation.navigate('SearchResult',{searchWord: this.state.searchKeyWord});
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
			<View>
				<View style={{flexDirection: 'row'}}>
					<TextInput
						style={{fontSize: 25,fontWeight: 'bold', width: "90%"}}
						onChangeText={(text) => this.setState({searchKeyWord: text})}
						 placeholder="Tìm kiếm"
					/>
					<TouchableOpacity style={{justifyContent: 'center'}} onPress={() =>{this.searchPress()}} >
						<Icon name="search" size={25} color="#000" style={{marginRight: 10}}/>
					</TouchableOpacity>
				</View>
				<FlatList 
					data={this.state.loaiMatHangs}
					renderItem={this.renderItem}
					horizontal={false}
					numColumns={2}
				/>
			</View>
		
			
		);
	}
}
export default ListTypeOfProductScreen;

const styles = StyleSheet.create({
	container:{
		marginTop: 10,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	textStyle : {		
		textShadowColor: 'rgb(0, 0, 0)',
		color: 'rgba(255, 255, 255, 1.0)',
		textShadowRadius: 15,
		fontSize: 25,
		fontWeight: 'bold'
	}
})