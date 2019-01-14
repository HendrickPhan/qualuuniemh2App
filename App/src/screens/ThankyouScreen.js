import React, {Component} from "react";
import{View, StyleSheet,ScrollView,Button,Picker,Image,Text} from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
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
				  onPress={()=>this.props.navigation.navigate('Home')}
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
