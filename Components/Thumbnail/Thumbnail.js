import React, { Component } from 'react';
import { Image, View } from 'react-native';
//=== Style ====================================================================
import './ThumbnailStlyes'

export default class name extends Component{
  render(){
    return(
        <View style={{ height:50, width:50 }}>
          <Image source = { this.props.src }/>
        </View>
    )
  }
}
