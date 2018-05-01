import React from 'react';

import './AuthStyles';

import { StyleSheet, View, Text, Linking } from 'react-native';

import { Card, ListItem, Button, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Auth from './../../Classes/Firebase/Auth/Auth';

import SignUp from './SignUp';
import SignIn from './SignIn';

export default class Authorization extends React.Component {
  constructor(props){
    super(props);
    this.setAuth = this.props.screenProps.saveState.bind(this)
    this.state = {
      userName:'',
      password:'',
      isRegesteredUser: true
    }
  }

  setAuthFlowState(authFlowState){
    console.log('in set auth flow state')
    this.setState({
      isRegesteredUser: authFlowState
    })
  }

  render() {
    return (
      <View>
        <Card>
          {
            this.state.isRegesteredUser?
              <SignIn firebase={this.props.screenProps.firebase} setAuthFlowState={this.setAuthFlowState.bind(this)} setAuth={this.setAuth.bind(this)}/>:
              <SignUp firebase={this.props.screenProps.firebase} setAuthFlowState={this.setAuthFlowState.bind(this)}/>
          }
        </Card>
      </View>
    );
  }
}
