import React, { Component } from 'react';
import {ScrollView,
		Image, 
		Text, 
		View,
		StyleSheet, 
		ImageBackground, 
		TouchableOpacity
} from 'react-native';


import Config from "./../config"

export class ItemTypePreview extends Component {	
	onPressLoaiMatHang = (id) => {
		alert(id);
	}
	
  render() {
	  		let url = Config.SERVER_URL + this.props.image;
    return (
	
		<View>
			<TouchableOpacity onPress={() => this.onPressLoaiMatHang(this.props.id)}>
				  <ImageBackground source={{uri: url}} style={{width: 100, height: 100}}>
					<View style={{position: 'absolute', width:'100%', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
					 <Text style={styles.textStyle}>{this.props.ten}</Text>
					</View>
				  </ImageBackground>
			  </TouchableOpacity>
		</View>	
	
    );
  }
}

export default ItemTypePreview;

const styles = StyleSheet.create({
	textStyle : {		
		textShadowColor: 'rgb(0, 0, 0)',
		color: 'rgba(255, 255, 255, 1.0)',
		textShadowRadius: 10,
		fontSize: 25,
		fontWeight: 'bold'
	}
})