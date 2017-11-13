
const initialState = {
    CurrentGroupName: 'initialGroupName',
};

export default function auth(state = initialState, action) {
    debugger;
  switch (action.type) {
    case 'UPDATE_CURRENT_GROUP':
        return { ...state, CurrentGroupName: action.group };
    default:
      return state;
  }
}
