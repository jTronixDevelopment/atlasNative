import React, { Component } from 'react';

import { StyleSheet, View, Linking } from 'react-native';
import { Card, ListItem, Button, FormInput, FormLabel, FormValidationMessage, Text } from 'react-native-elements';

import Auth from './../../Classes/Firebase/Auth/Auth'

//=== Style ====================================================================

export default class SignUp extends Component{

  constructor(props){
    super(props)
    this.auth = new Auth(this.props.firebase)
    this.setAuth = this.props.setAuth.bind(this)
    this.state = {
      email : '',
      password: ''
    }
  }

  //=== Methods ================================================================

  signIn(){
    this.auth.signIn({
      successHandler: ()=>{ this.setAuth(true) },
      errorHandler: (err)=>{console.log(err)},
      email: this.state.email,
      password: this.state.password
    })
  }

  changeView(){
    this.props.setAuthFlowState(false)
  }

  //=== Component Life Cycle ===================================================

  render(){
    return(
      <View>
        <Text h4 style={{textAlign:'center'}}>SignIn</Text>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})} inputStyle={authStyle.signInInput}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({password})} inputStyle={authStyle.signInInput}/>
        <Button onPress={ this.signIn.bind(this)} title='Sign In' buttonStyle ={{backgroundColor: '#7acc8f',borderRadius:10, marginTop: 20}}/>
        <Text style={{color: 'blue', textAlign:'center', paddingTop: 20}} onPress={ this.changeView.bind(this) }>
          Not a member yet click here!
        </Text>
      </View>
    )
  }
}
