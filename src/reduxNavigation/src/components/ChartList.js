import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'


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
        headerTitle: '当前仪表盘',
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
