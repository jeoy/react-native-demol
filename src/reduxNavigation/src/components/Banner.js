import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button,  List, ListItem  } from 'react-native-elements'
import { StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';


const list = [
    {
       title: '当前项目',
       icon: 'av-timer'
     }
]
// var title = this.props.title;
const GobackBanner = ({ goToGroup, title }) => {
    return (
        <View  style={styles.container}>
            <List containerStyle={styles.list}>
              {
                list.map((l, i) => (
                    <ListItem
                           key={i}
                           title={title}
                           leftIcon={{name: l.icon}}
                           onPress={goToGroup}
                     />
                ))
              }
            </List>
        </View>
    );
}


GobackBanner.propTypes = {
    title: PropTypes.string.isRequired,
    goToGroup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    goToGroup: () =>
        dispatch(NavigationActions.navigate({ routeName: 'Group' }))
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue'
    },
    list: {
        marginTop: 0
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(GobackBanner);
