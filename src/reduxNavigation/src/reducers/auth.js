import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialAuthState = {
    isLoggedIn: false,
    CurrentGroupName: 'initialGroupName',
    CurrentDashboardName: 'initialDashboardName'
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    case 'UpdateCurrentGroup':
        return { ...state, CurrentGroupName: action.name };
    case 'UpdateCurrentDashboard':
        return { ...state, CurrentDashboardName: action.name };
    default:
      return state;
  }
}
