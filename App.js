/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  SectionList,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MyMenu from './components/Menu';

import SideMenu from 'react-native-side-menu';

const instructions = Platform.select({
  ios: 'Press Cmd+R toooo reload ,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 640
const uiWidthPx = 640;

function pxToDp(uiElementPx) {
    return uiElementPx *  deviceWidthDp / uiWidthPx;
}

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

export default class App extends Component {
    constructor(){
  super();
  this.state ={
    isOpen: false
  };
}

onMenuItemSelected = (item) => {
   console.log(item);
   switch(item){
     case 'Home':
       console.log(Home);
       break;
     case 'About':
       console.log(About)
       break;
   }
   this.setState({
     isOpen: false
   });
 }
 updateMenuState(isOpen){
   this.setState({isOpen, });
 }

 toggle(){
     console.log(this.state.isOpen)
   this.setState({
     isOpen: true
   });
 }
 render() {
     var menu = <MyMenu/>;

     return (
         <SideMenu
         menu={menu}
         openMenuOffset={200}
         toleranceX={1}
         isOpen={this.state.isOpen}
         //   hiddenMenuOffset = {-100}
         >
             <View style={{backgroundColor: "#F5FCFF", padding: 40}} >
                <Button title={'press here'} style={styles.button} onPress={() => this.toggle()}>
                </Button>
             </View>
             <Main/>
         </SideMenu>
     );
}
}

class Main extends Component {
  render() {
    return (
        <ScrollView >
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <View style={styles.container2}>
                        <SectionList
                          sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                          ]}
                          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        />
                      </View>
                <View style={{flex:3, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 100, padding:10, height: 100, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.eye} />
                            <View style={{flex:1, width: 200, height: 0, backgroundColor: 'red'}} />
                            <View style={styles.eye} />
                        </View>
                        <View style={styles.nose} />
                        <View style={styles.mouth} >
                            <View style={styles.mouth1} />
                        </View>
                    </View>
                </View>
                <View style={{width: 319, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 374, height: 150, backgroundColor: 'steelblue'}} />
                <View style={{width: pxToDp(637), height: pxToDp(150), backgroundColor: 'powderblue'}} />

                <View style={{
                  width: 400,
                  height: 400,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                //   alignItems: 'stretch',
                //   backgroundColor: 'yellow'
                }}>
                  <View style={{width: 50,   backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={styles.container}>
                     <FlatList
                       data={[
                         {key: 'Devin'},
                         {key: 'Jackson'},
                         {key: 'James'},
                         {key: 'Joel'},
                         {key: 'John'},
                         {key: 'Jillian'},
                         {key: 'Jimmy'},
                         {key: 'Julie'},
                       ]}
                       renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                     />
                </View>
            </View>
        </ScrollView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  eye: {
      flex: 1,
      height: 25,
      backgroundColor: 'steelblue'
  },
  nose: {
      width: 30,
      height: 10,
      backgroundColor: 'steelblue',
  },
  mouth: {
      width: 55,
      height: 20,
      backgroundColor: 'steelblue',
       alignItems: 'center'
  },
  mouth1: {
      marginTop: 10,
      width: 30,
      height: 10,
      backgroundColor: 'powderblue'
  },
  sectionHeader: {
  paddingTop: 2,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 14,
  fontWeight: 'bold',
  backgroundColor: 'rgba(247,247,247,1.0)',
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
container2: {
    width: 300,
    flexDirection: 'column'
}
});
