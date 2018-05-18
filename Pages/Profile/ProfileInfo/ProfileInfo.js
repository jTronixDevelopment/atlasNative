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
    console.log('Profile infor , ',props)
  }

  componentDidMount(){
    this.setState({
      profilePicture : this.props.userInfo.profilePicture?this.props.userInfo.profilePicture:PersonIcon,
      firstName: this.props.userInfo.firstName?this.userInfo.props.firstName:"Loading...",
      lastName: this.props.userInfo.lastName?this.userInfo.props.lastName:"Loading...",
      dateOfBirth : this.props.userInfo.dateOfBirth?this.userInfo.props.dateOfBirth:"Loading...",
      hometown: this.props.userInfo.hometown?this.props.userInfo.hometown:"Loading..."
    })
  }

  render(){
    return(
        <View>
          <Text>Profile Info</Text>
          <Image source={{ uri: this.props.userInfo.profilePic }} style={{ width:100, height: 100 }} />
          <Text>{ this.props.userInfo.firstName }</Text>
          <Text>{ this.props.userInfo.lastName }</Text>
          <Text>{ this.props.userInfo.hometown }</Text>
          <Text>{ this.props.userInfo.bio }</Text>
        </View>
    )
  }
}
