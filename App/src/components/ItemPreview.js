import React, { Component } from 'react';
import {ScrollView,Image, Text, View, StyleSheet} from 'react-native';
import Config from "./../config"

export class ItemPreview extends Component {
  render() {
	  		let url = Config.SERVER_URL + this.props.image;
    return (

      <View style={styles.list}>
		<View  style={{marginRight: 20}}>
			<Image
			style={{width: 100, height: 100}} 
			 
			source={{uri: url}}
			/>
		</View>
		<View>
			<Text style={{marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}>{this.props.ten}</Text>
			<Text style={{marginBottom: 10}}>Giá: {this.props.gia} VNĐ</Text>
			<Text style={{}}>Xuất xứ: {this.props.xuatXu} </Text>
		</View>
		
      </View>

	 
    );
  }
}
const styles = StyleSheet.create({
	list:{
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 20,
		backgroundColor:'white',
		width: 1000,
		height:105,
		marginBottom:10,
		borderWidth: 1,
		borderRadius: 2,
		borderColor: 'white',
		borderBottomWidth: 0,
		shadowColor: 'white',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		fontSize:   20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
	},
	
})


export default ItemPreview;