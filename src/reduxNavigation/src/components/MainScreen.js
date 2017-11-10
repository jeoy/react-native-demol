import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import GroupList from './GroupList'
import DashboardList from './DashboardList';
import ChartList from './ChartList'


const MainScreen = StackNavigator({
    Dashboard: {
        screen: DashboardList,
        path: 'Main/:GroupId'
    },
    Group: {
        screen: GroupList,
    },
    Chart: {
        screen: ChartList,
        path: 'Main/:GroupId/:DashboardId'
    }
}, {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
});

export default MainScreen;
