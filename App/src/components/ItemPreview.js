import React, { Component } from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';


export class ItemPreview extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
		<Image
		style={{width: 50, height: 50}}
		source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
		/>
		<Text>Giá {this.props.name}!</Text>
		<Text>Xuất xứ</Text>
      </View>
    );
  }
}

export default ItemPreview;