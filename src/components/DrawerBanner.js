import React, { Component } from 'react';
import { SafeAreaView, DrawerItems } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default CustomDrawerContentComponent = (props) => (
  <SafeAreaView style={styles.container} >
    <View style={styles.banner} >
        <Text style={{fontSize: 20, color: 'white'}}>Current Group</Text>
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
     width: 300,
     height: 150,
     backgroundColor: '#5ec264',
     justifyContent: 'center',
     alignItems: 'center',
  }
});
