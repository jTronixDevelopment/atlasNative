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
          <MapView initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
        </View>
    )
  }
}
