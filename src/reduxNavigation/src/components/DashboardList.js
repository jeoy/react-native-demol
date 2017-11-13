import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';

import Banner from './Banner';
import * as navigationActions from '../action/navigation';

const list = [
    {
       title: '仪表盘1',
       icon: 'av-timer'
     },
     {
       title: '仪表盘2',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘3',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘4',
       icon: 'flight-takeoff'
     },
     {
       title: '仪表盘5',
       icon: 'flight-takeoff'
     },
]

class DashboardList extends Component {
    render() {
        return (
            <ScrollView  style={styles.container}>
            <Banner title={this.props.CurrentGroupName}/>
            <List containerStyle={{marginBottom: 20}}>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.title}
                        leftIcon={{name: l.icon}}
                        onPress={() => this.props.routeTo('Chart', {name: l.title})}
                        />
                    ))
                }
                </List>
                </ScrollView>
            );
        }
}

DashboardList.propTypes = {
    CurrentGroupName: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    CurrentGroupName: state.group.CurrentGroupName
});

// const mapDispatchToProps = dispatch => ({
//     goToChartList: (data, navigation) => {
//         dispatch({ type: 'ROUTE_TO', route: 'Chart', data });
//     }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default connect(mapStateToProps, {...navigationActions})(DashboardList);
