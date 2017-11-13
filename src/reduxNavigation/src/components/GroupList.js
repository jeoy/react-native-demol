import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'

import * as navigationActions from '../action/navigation';
import * as groupsActions from '../action/groups';

const list = [
    {
       name: '项目1',
       icon: 'av-timer'
     },
     {
       name: '项目2',
       icon: 'flight-takeoff'
     },
     {
       name: '项目3',
       icon: 'flight-takeoff'
     },
     {
       name: '项目4',
       icon: 'flight-takeoff'
     },
     {
       name: '项目5',
       icon: 'flight-takeoff'
     },
]

// export const GroupList = ({ navigation }) => (
//     <View  style={styles.container}>
//         <List containerStyle={styles.list}>
//         {
//             list.map((l, i) => (
//                 <ListItem
//                     key={i}
//                     title={l.name}
//                     leftIcon={{name: l.icon}}
//                     onPress={() => this.goBackToDashboard(l.name, navigation)}
//                     />
//             ))
//         }
//         </List>
//     </View>
// );

class GroupList  extends Component {
    goBackToDashboard = (Group)=> {
        this.props.UpdateCurrentGroup(Group);
        this.props.goBack();
    }
    render() {
        return (
            <View  style={styles.container}>
            <List containerStyle={styles.list}>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        leftIcon={{name: l.icon}}
                        onPress={() => this.goBackToDashboard(l.name)}
                        />
                    ))
            }
            </List>
            </View>
        )
    };
};


GroupList.navigationOptions = props => {
    const { navigation } = props;
    return {
        headerTitle: navigation.state.params.name,
        headerLeft: (<Button
          onPress={() => navigation.goBack()}
          title="返回"
        />)
    }
};

GroupList.propTypes = {
    navigation: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
});

// const mapDispatchToProps = dispatch => ({
//     goBackToDashboard: (name, navigation) => {
//         dispatch({ type: 'UpdateCurrentGroup', name });
//         dispatch(navigation.goBack());
//     }
// });
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
    },
    list: {
        marginBottom: 20,
    }
});

export default connect(mapStateToProps, {...navigationActions, ...groupsActions})(GroupList);
