import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'
import { StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as navigationActions from '../action/navigation';


const list = [
    {
       title: '当前项目',
       icon: 'av-timer'
     }
]

class GobackBanner extends Component {
  render() {
    const { title } = this.props
    return (
        <View  style={styles.container}>
            <List containerStyle={styles.list}>
              {
                list.map((l, i) => (
                    <ListItem
                           key={i}
                           title={title}
                           leftIcon={{name: l.icon}}
                           onPress={() => this.props.routeTo('Group', {name: title})}
                     />
                ))
              }
            </List>
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue'
    },
    list: {
        marginTop: 0
    }
});
export default connect(()=>({}), {...navigationActions})(GobackBanner);
