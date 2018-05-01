import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileMap from './ProfileMap/ProfileMap';

export default class App extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
        <View>
          <ProfileInfo/>
          <ProfileMap/>
        </View>
    );
  }
}
