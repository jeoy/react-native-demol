import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';

import Banner from './Banner'

const list = [
    {
       title: '仪表盘：红石发生器',
       icon: 'av-timer'
     },
     {
       title: '仪表盘：钻石发生器',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘：黑曜石发生器',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘：草块发生器',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘：圆石石发生器',
       icon: 'flight-takeoff'
     },
]

export const DashboardList = ({CurrentGroupName, navigation, goToChartList }) => (
        <ScrollView  style={styles.container}>
            <Banner title={CurrentGroupName}/>
            <List containerStyle={{marginBottom: 20}}>
              {
                list.map((l, i) => (
                    <ListItem
                           key={i}
                           title={l.title}
                           leftIcon={{name: l.icon}}
                           onPress={() => goToChartList(l.title, navigation)}
                     />
                ))
              }
            </List>
        </ScrollView>
    );

DashboardList.propTypes = {
    CurrentGroupName: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    goToChartList: PropTypes.func.isRequired
};

DashboardList.navigationOptions = {
    title: 'DashboardList'
};

const mapStateToProps = state => ({
    CurrentGroupName: state.auth.CurrentGroupName
});

const mapDispatchToProps = dispatch => ({
    goToChartList: (name, navigation) => {
        dispatch({ type: 'UpdateCurrentDashboardName', name });
        // dispatch(navigation.navigate('Chart'));
        // dispatch(NavigationActions.navigate({ routeName: 'Chart' }))
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardList);
