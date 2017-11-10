import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';


const list = [
    {
       name: 'Minecraft项目1',
       icon: 'av-timer'
     },
     {
       name: 'Minecraft项目2',
       icon: 'flight-takeoff'
     },
     {
       name: 'Minecraft项目3',
       icon: 'flight-takeoff'
     },
     {
       name: 'Minecraft项目4',
       icon: 'flight-takeoff'
     },
     {
       name: 'Minecraft项目5',
       icon: 'flight-takeoff'
     },
]

export const GroupList = ({ navigation, goBackToDashboard }) => (
    <View  style={styles.container}>
        <List containerStyle={styles.list}>
        {
            list.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    leftIcon={{name: l.icon}}
                    onPress={() => goBackToDashboard(l.name)}
                    />
            ))
        }
        </List>
    </View>
);

GroupList.propTypes = {
    navigation: PropTypes.object.isRequired,
    goBackToDashboard: PropTypes.func.isRequired,
};

GroupList.navigationOptions = {
    title: 'GroupList',
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    goBackToDashboard: (name) => {
        dispatch({ type: 'UpdateCurrentGroupName', name });
        dispatch(NavigationActions.back());
    }

});
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
    },
    list: {
        marginBottom: 20,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
