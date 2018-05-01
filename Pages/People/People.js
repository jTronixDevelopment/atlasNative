import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import FeedItem from './../../Components/FeedItem/FeedItem';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>People</Text>
        <FeedItem/>
      </View>
    );
  }
}
