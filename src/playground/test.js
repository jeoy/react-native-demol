import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class testDemo extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={styles.container}>

        <View style={{flex:1, height:20, backgroundColor:'#ff3333'}} >
        </View>
        <View style={{flex:1,height:20, backgroundColor:'#003300'}} >
        </View>
      </View>
    );
  }
};



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'lightyellow',
    }
});
