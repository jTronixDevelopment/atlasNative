import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import { Card, ListItem, Button, FormInput, FormLabel, FormValidationMessage, Text } from 'react-native-elements';

import Auth from './../../Classes/Firebase/Auth/Auth';

//=== Style ====================================================================

export default class SignUp extends Component{

  constructor(props){
    super(props)
    this.auth = new Auth(this.props.firebase);
    this.state = {
      password : '',
      confirmedPassword : '',
      email : '',
      dateOfBirth: '',
      homeTown:''
    }
  }

  changeView(){
    this.props.setAuthFlowState(true)
  }

  signUp(){
    this.auth.signUp({
      successHandler: ()=>{ this.props.setAuthFlowState(true) },
      errorHandler: ()=>{},
      email: this.state.email,
      password: this.state.password
    })
  }

  //=== Component Life Cycle ===================================================

  render(){
    return(
      <View>
        <Text h4 style={{textAlign:'center'}}>Sign Up</Text>

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})} inputStyle={authStyle.signInInput}/>

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({password})} inputStyle={authStyle.signInInput}/>

        <FormLabel>Confirm password</FormLabel>
        <FormInput onChangeText={(confirmedPassword) => this.setState({confirmedPassword})} inputStyle={authStyle.signInInput}/>

        <FormLabel>Date of Birth</FormLabel>
        <FormInput onChangeText={(dateOfBirth) => this.setState({dateOfBirth})} inputStyle={authStyle.signInInput}/>

        <FormLabel>Home Town</FormLabel>
        <FormInput onChangeText={(homeTown) => this.setState({homeTown})} inputStyle={authStyle.signInInput}/>

        <Button onPress={this.signUp.bind(this)} title='Sign Up' buttonStyle ={{backgroundColor: '#7acc8f',borderRadius:10, marginTop:20}}/>
        <Text style={{color: 'blue', textAlign:'center', marginTop:20}} onPress={ this.changeView.bind(this) }>
          Not a member yet click here!
        </Text>
      </View>
    )
  }
}
