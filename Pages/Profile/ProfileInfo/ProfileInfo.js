import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import { PersonIcon } from './../../../imgs/icons';

//=== Style ====================================================================
import './ProfileInfoStyles'

export default class ProfileInfo extends Component{

  constructor(props){
    super(props)
    this.state = {
      profilePicture : PersonIcon,
      firstName: "FirstName",
      lastName:'LastName',
      dateOfBirth : "01/01/01",
      hometown: 'Anytown,USA'
    }
  }

  componentDidMount(){
    this.setState({
      profilePicture : this.props.profilePicture?this.props.profilePicture:PersonIcon,
      firstName: this.props.firstName?this.props.firstName:"Loading...",
      lastName: this.props.lastName?this.props.lastName:"Loading...",
      dateOfBirth : this.props.dateOfBirth?this.props.dateOfBirth:"Loading...",
      hometown: this.props.hometown?this.props.hometown:"Loading..."
    })
  }

  render(){
    return(
        <View>
          <Text>Profile Info</Text>
          <Image source={this.state.profilePicture}/>
          <Text>{ this.state.firstName }</Text>
          <Text>{ this.state.lastName }</Text>
          <Text>{ this.state.hometown }</Text>
          <Text>{ this.state.dateOfBirth }</Text>
        </View>
    )
  }
}
