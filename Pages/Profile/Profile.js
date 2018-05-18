import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileMap from './ProfileMap/ProfileMap';

import DB from './../../Classes/Firebase/Database/Database'
import Storage from './../../Classes/Firebase/CloudStorage/CloudStorage'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.firebase = this.props.screenProps.firebase
    this.storage = new Storage(this.firebase);
    this.db = new DB(this.firebase);
    this.state = {
      userInfo: "poop"
    }
  }

  getUserData(){
    if(this.firebase&&this.firebase.auth().currentUser){
      this.db.getUserData({
        docId : this.firebase.auth().currentUser.uid,
        successHandler: this.setUserData.bind(this),
        errorHandler:(err)=>{console.log("crash")}
      })
      // this.storage.getProfilePic({
      //   docId : this.firebase.auth().currentUser.uid,
      //   successHandler: this.setUserPhoto.bind(this)
      // })
    } else {
      console.log("Firebase not defined or user not logged in.")
    }
  }

  setUserData(data){
    console.log(data.data())
    this.setState({ userInfo : data.data() })
  }

  componentDidMount(){
    this.getUserData()
  }

  render() {
    return (
        <View>
          <ProfileInfo userInfo={this.state.userInfo}/>
          <ProfileMap/>
        </View>
    );
  }
}
