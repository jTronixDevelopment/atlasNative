import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Header } from 'react-native-elements'
import { MapIcon } from './../../imgs/icons';

import styles from './HeaderStyles';

export default class App extends React.Component {
  render() {
    return (
      <Header backgroundColor ='#7acc8f'
        centerComponent={{ text: 'Atls', style: { color: '#fff' } }}
      />
    );
  }
}
