import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Header } from 'react-native-elements';

import styles from './NavigationStyles';

export default class Navigation extends React.Component {

  render() {
    return(
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  }
}
