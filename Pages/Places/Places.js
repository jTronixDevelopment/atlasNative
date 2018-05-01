import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import FeedItem from './../../Components/FeedItem/FeedItem';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Places</Text>
        <FeedItem/>
      </View>
    );
  }
}
