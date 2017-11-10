import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'


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
                    onPress={() => goBackToDashboard(l.name, navigation)}
                    />
            ))
        }
        </List>
    </View>
);

GroupList.navigationOptions = props => {
    const { navigation } = props;
    return {
        headerTitle: '当前项目',
        headerLeft: (<Button
          onPress={() => navigation.goBack()}
          title="返回"
        />)
    }
};

GroupList.propTypes = {
    navigation: PropTypes.object.isRequired,
    goBackToDashboard: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    goBackToDashboard: (name, navigation) => {
        dispatch({ type: 'UpdateCurrentGroupName', name });
        dispatch(navigation.goBack());
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