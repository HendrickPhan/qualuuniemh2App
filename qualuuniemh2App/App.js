import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		<Image
			style={{width: 50, height: 50}}
			source={{uri: 'https://qualuuniemh2.000webhostapp.com/upload/hp_big_img.jpg'}}
		/>
	 
        <Text>Test!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
