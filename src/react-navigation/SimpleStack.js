/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import SampleText from './SampleText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'natasha' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  drawerLabel: '项目1',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="menu"
      size={30}
      style={{ color: tintColor }}
    />
  ),
  drawerLockMode: 'locked-closed'
};

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotosScreen.navigationOptions = {
    drawerLabel: '项目2',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="move-to-inbox"
        size={30}
        style={{ color: tintColor }}
      />
    ),
    drawerLockMode: 'locked-closed'
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit'
      ? 'Now Editing '
      : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);

MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerTitle: (
        <Button
        title='仪表盘 ⏬'
          onPress={() =>
             alert('弹出下拉菜单')}
        />
    ),
    headerLeft: (
        <MaterialIcons
          name="menu"
          size={30}
          style={{ color: '#5ec264' }}
          onPress={() =>
             navigation.navigate('DrawerOpen')}
        />
    ),
    headerRight: (
      <Button
      title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
    drawerLabel: '项目2',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="move-to-inbox"
        size={24}
        style={{ color: tintColor }}
      />
    ),
    drawerLockMode: 'locked-closed'
  };
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  },
}, {
    headerMode: 'screen',
});

export default SimpleStack;
