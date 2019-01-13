import React, { Component } from 'react';
import {ScrollView,
		Image, 
		Text, 
		View,
		StyleSheet, 
		ImageBackground, 
		TouchableOpacity,
		Dimensions
} from 'react-native';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Config from "./../config"

export class ItemTypePreview extends Component {	
	onPressLoaiMatHang = (id) => {
		alert(id);
	}
	
  render() {
	  		let url = Config.SERVER_URL + this.props.image;
    return (
	
		<View>	
			<ImageBackground source={{uri: url}} style={{width:Dimensions.get('window').width / 2,height:Dimensions.get('window').width / 2}}>
					<View style={{position: 'absolute', width:'100%', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
						<Text style={styles.textStyle}>{this.props.ten}</Text>
					</View>
			</ImageBackground>
		</View>	
	
    );
  }
}



const styles = StyleSheet.create({
	textStyle : {		
		textShadowColor: 'rgb(0, 0, 0)',
		color: 'rgba(255, 255, 255, 1.0)',
		textShadowRadius: 15,
		fontSize: 25,
		fontWeight: 'bold'
	}
})


export default ItemTypePreview;