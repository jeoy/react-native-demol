import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'

import * as navigationActions from '../action/navigation';


const list = [
    {
       name: '图表1',
       icon: 'av-timer'
     },
     {
       name: '图表2',
       icon: 'flight-takeoff'
     },
     {
       name: '图表3',
       icon: 'flight-takeoff'
     },
     {
       name: '图表4',
       icon: 'flight-takeoff'
     },
     {
       name: '图表5',
       icon: 'flight-takeoff'
     },
]

export const ChartList = ({ navigation, CurrentDashboardName, goBack}) =>{
    return (
        <View  style={styles.container}>
        <List containerStyle={styles.list}>
        {
            list.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    leftIcon={{name: l.icon}}
                    onPress={() => goBack(l.name, navigation)}
                    />
                ))
            }
            </List>
            </View>
);}

ChartList.navigationOptions = props => {
    const { navigation } = props;
    return {
        headerTitle: navigation.state.params.name,
        headerLeft: (<Button
          onPress={() => navigation.goBack()}
          title="返回"
        />)
    }
};

ChartList.propTypes = {
    navigation: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    CurrentDashboardName: state.auth.CurrentDashboardName
});


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
    },
    list: {
        marginBottom: 20,
    }
});

export default connect(mapStateToProps, {...navigationActions})(ChartList);
