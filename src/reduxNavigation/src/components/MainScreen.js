import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import GroupList from './GroupList'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  }
});



const MainScreen = StackNavigator({
  GroupList: {
    screen: GroupList,
    path: 'grouplist'
  }
}, {
    initialRouteName: 'GroupList',
    headerMode: 'screen',
});

export default MainScreen;
