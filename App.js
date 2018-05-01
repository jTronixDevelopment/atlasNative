import React from 'react';
import { StyleSheet, View, Navigator, NativeModules, SafeAreaView, Image, Text } from 'react-native';

// import { COLOR, ThemeProvider } from '../react-native-material-ui';

import { PersonIcon, GlobeIcon, SearchIcon, EditBlackIcon, PassportIcon } from './imgs/icons';

import { Firebase } from './Classes/Firebase/setup.js';

import Auth from './Pages/Auth/Auth';
import Profile from './Pages/Profile/Profile';
import Places from './Pages/Places/Places';
import People from './Pages/People/People';
import Messages from './Pages/Messages/Messages';
import Search from './Pages/Search/Search';
import PostItem from './Pages/PostItem/PostItem';

import Header from './Components/Header/Header';

import { TabNavigator } from 'react-navigation';

const TabNav = TabNavigator({
    People : {
      screen: People,
      navigationOptions: { tabBarIcon: (<Image source={PersonIcon} style={{height:25,width:25}}/>) }
    },
    Places : {
      screen : Places,
      navigationOptions: { tabBarIcon: (<Image source={GlobeIcon} style={{height:25,width:25}}/>) }
    },
    PostItem : {
      screen: PostItem,
      navigationOptions: { tabBarIcon: (<Image source={EditBlackIcon} style={{height:25,width:25}}/>) }
    },
    Search : {
      screen: Search,
      navigationOptions: { tabBarIcon: (<Image source={SearchIcon} style={{height:25,width:25}}/>) }
    },
    Profile : {
      screen: Profile,
      navigationOptions: { tabBarIcon: (<Image source={PassportIcon} style={{height:25,width:25}}/>) }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor:'white',
      inactiveTintColor:'black',
      style : { backgroundColor: "#7acc8f"},
      showIcon : true,
      showLabel : false
    }
  },
  {
    initialRouteName: 'Auth',
  }
)

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isAuth : true
    }
  }

  saveState(authState){
    this.setState({
      isAuth : authState
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.fullHeight}>
        <Header/>
        {
          (this.state.isAuth)?<TabNav screenProps={{ firebase: Firebase }}/>:<Auth screenProps = {{firebase: Firebase, saveState : this.saveState.bind(this) }}/>
        }
      </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({
  fullHeight:{
    height:'100%',
    width:"100%"
  }
})
