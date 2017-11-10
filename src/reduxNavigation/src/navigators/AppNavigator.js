import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import DashboardList from '../components/DashboardList';
import GroupList from '../components/GroupList';


export const AppNavigator = StackNavigator({
        Group: {
            screen: GroupList,
            path: 'Main'},
        Dashboard: {
            screen: DashboardList,
            path: 'Main/:GroupId'
        }
    }, {
        headerMode: 'screen',
    });


const AppNavigatorWrap = StackNavigator({
        AppNavigator: {
            screen: AppNavigator,
        },
    }, {
        headerMode: 'screen',
    });


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
