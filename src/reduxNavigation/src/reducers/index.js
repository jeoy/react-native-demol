import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state, action) {
    console.log('state')
    console.log(state)
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'UpdateCurrentDashboardName':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Chart' }),
          state
        );
        break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  console.log('nextState')
  console.log(nextState)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;;
}

const initialAuthState = {
    isLoggedIn: false,
    CurrentGroupName: 'initialGroupName',
    CurrentDashboardName: 'initialDashboardName'
};

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    case 'UpdateCurrentGroupName':
        return { ...state, CurrentGroupName: action.name };
    case 'UpdateCurrentGroupName':
        return { ...state, CurrentDashboardName: action.name };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
