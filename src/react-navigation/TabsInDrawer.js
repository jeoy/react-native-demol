/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleStack from './SimpleStack';
import StacksOverTabs from './StacksOverTabs';
import DrawerBanner from '../components/DrawerBanner.js'

const TabsInDrawer = DrawerNavigator({
    SimpleStack: {
        screen: SimpleStack,
        navigationOptions: {
            drawer: () => ({
                label: 'Simple Stack',
                icon: ({ tintColor }) => (
                    <MaterialIcons
                    name="filter-1"
                    size={24}
                    style={{ color: tintColor }}
                    />
                ),
            }),
        },
    },
    StacksOverTabs: {
        screen: StacksOverTabs,
        navigationOptions: {
            drawer: () => ({
                label: 'Stacks Over Tabs',
                icon: ({ tintColor }) => (
                    <MaterialIcons
                    name="filter-2"
                    size={24}
                    style={{ color: tintColor }}
                    />
                ),
            }),
        },
    },
},
    {
      initialRouteName: 'SimpleStack',
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

export default TabsInDrawer;
