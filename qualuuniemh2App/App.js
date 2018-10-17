import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default class App extends React.Component {
	render() {
		let logo = require('./assets/logo.png')
		let background = require('./assets/hp_big_img.jpg')
	  
	  
		return (
		<View style={styles.container}>
			<Image
			style={{width: 50, height: 50}}
			source={logo}
			/>
			<Text
			style={
				{
					fontSize: 40,
				}
				
			}
			>Quà lưu niệm H2</Text>
			<Image
			style={
				{resizeMode: 'cover'}
			}
			source={background}
			/>
		</View>
		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
