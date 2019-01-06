import React, { Component } from 'react';
import {ScrollView,Image, Text, View, StyleSheet} from 'react-native';
import Config from "./../config"

export class ItemPreview extends Component {
  render() {
	  		let url = Config.SERVER_URL + this.props.image;
    return (

      <View style={{flex: 1, flexDirection: 'row', paddingBottom: 20}}>
		<View  style={{marginRight: 20}}>
			<Image
			style={{width: 100, height: 100}}
			source={{uri: url}}
			/>
		</View>
		<View>
			<Text style={{marginBottom: 10}}>Tên sản phẩm: {this.props.ten}!</Text>
			<Text style={{marginBottom: 10}}>Giá: {this.props.gia}!</Text>
			<Text style={{}}>Xuất xứ:{this.props.xuatXu} </Text>
		</View>
		
      </View>

	 
    );
  }
}

export default ItemPreview;