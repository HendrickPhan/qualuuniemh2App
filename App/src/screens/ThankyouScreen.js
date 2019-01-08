import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Button,Picker,Image} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { FormLabel, FormInput, Text,FormValidationMessage,Tile} from 'react-native-elements'
export class ThankyouScreen extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  titleText1: "Bạn đã đặt hàng thành công!",
		  titleText2: 'Cảm ơn bạn đã ủng hộ',
		  BackHome: 'Tiếp tục mua hàng',
		}
	};
	onPressLearnMore() {
	 }
	render(){
		return (

	<View style={styles.container}>
	  <Image source={require('./img/thanks.jpg')} style={styles.backgroundImage}/>
			<Text h4 style={styles.text1} >{this.state.titleText1}</Text>
				<Text style={styles.text1}>{this.state.titleText2}</Text>
				<Button
				  onPress={this.onPressLearnMore}
				  title={this.state.BackHome}			 
				/>
	
	</View>		
			
		);
	}
}
export default ThankyouScreen;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	 backgroundImage: {
   backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
  },
  text1:{
	  color:'white'
  }
})
AppRegistry.registerComponent('AwesomeProject', () => ThankyouScreen);
