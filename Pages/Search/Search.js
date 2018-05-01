import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchQuery : ''
    }
  }
  render() {
    return (
      <View>
        <TextInput style={style.searchBar} platform="android" onChangeText={(searchQuery) => this.setState({searchQuery})}  onClear={()=>{this.state.setState({searchQuery:''})}} placeholder='Search...' />
      </View>
    )
  }
}

const style = StyleSheet.create({
  searchBar: {
    margin:20,
    padding:5,
    paddingLeft:15,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:20
  }
})
