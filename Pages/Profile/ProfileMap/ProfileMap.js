import React, { Component } from 'react';

import { View, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

//=== Style ====================================================================
import './ProfileMapStyles'

export default class ProfileMap extends Component{

  constructor(props){
    super(props)
  }

  //=== Component Life Cycle ===================================================

  render(){
    return(
        <View>
          <MapView provider = { PROVIDER_GOOGLE }/>
        </View>
    )
  }
}
