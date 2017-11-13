import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  SectionList,
  Button,
  PanResponder
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import PropTypes from 'prop-types';

// UI 组件
class Counter extends Component {
  render() {
    const { value } = this.props
    return (
      <View style={styles.container}>
        <Button
          title="Increase"
          onPress={ this.props.onIncreaseClick}
        />
        <Text>{value}</Text>

      </View>
    )
  }
}


// 容器组件
// Action

// Reducer
function counterStore(state = { count: 0 }, action) {
    console.log('---------11-------');
    console.log(state)
    console.log(state.count);
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}


function counterStore2(state = { count2: 0 }, action) {
    console.log('---------22-------');
    console.log(state.count2);
    const count2 = state.count2
  switch (action.type) {
    case 'increase':
      return { count2: count2 + 2 }
    default:
      return state
  }
}

function counterStore3(state = { count3: 0 }, action) {
    console.log('---------3-------');
    console.log(state.count3);
    const count3 = state.count3
  switch (action.type) {
    case 'increase':
      return { count3: count3 + 3 }
    default:
      return state
  }
}



function counterStore4(state = { count: 0 }, action) {
    console.log('---------4-------');
    console.log(state.count);
    const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 4 }
    default:
      return state
  }
}

// Store 利用reducer建立一个store，自带了内部状态的更新方式

const store = createStore(combineReducers({
  counterStore,
  counterStore2,
  counterStore3,
  counterStore4
}))


// 组件连接


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counterStore3.count3   // 这里是UI对store 的监听
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch( { type: 'increase' })
  }
}


// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


export default class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 100,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
