import { NavigationActions } from 'react-navigation';

export function routeTo(route, data) {
    return {
        type: 'ROUTE_TO',
        route,
        data
    };
};


export function goBack(route) {
    return {
        type: 'GO_BACK'
    };
};
