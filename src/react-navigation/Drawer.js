/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { DrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText';

import DrawerBanner from '../components/DrawerBanner.js'
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => navigation.navigate('DrawerOpen')}
        title="Open drawer"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox22',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  )
};

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      }
    },
    contentComponent: DrawerBanner,
    drawerWidth: 300
  }
);

export default DrawerExample;
