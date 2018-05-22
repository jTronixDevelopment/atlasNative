import React, { Component } from 'react';

import { View, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, FormInput, FormLabel, FormValidationMessage, Text, Badge, Icon } from 'react-native-elements';
import DB from './../../Classes/Firebase/Database/Database.js';
import Storage  from './../../Classes/Firebase/CloudStorage/CloudStorage';
import { MapMarkerIcon } from './../../imgs/icons'
//=== Style ====================================================================

export default class name extends Component{

  constructor(props){
    super(props)
    this.firebase = this.props.screenProps.firebase
    this.db = new DB(this.firebase)
    this.storage = new Storage(this.firebase)
    this.state = {
      postWidgetIsHidden : 'none',
      mapVisability : 'none',
      userLocation : { lat : 0, lng : 0}
    }
  }

  postItem(){
    this.db.add({
      successHandler: this.postSuccessHandler.bind(this),
      errorHandler : this.postErrorHandler.bind(this),
      data : this.getPostInfo(),
      collection : 'posts'
    })
  }

  postSuccessHandler(data){
    this.storage.upload({
      file: this.postImageInput.files[0],
      path: '/postImages/' + data.id,
      data: data,
      successHandler : ()=>{console.log("workign")},
      errorHandler: this.postErrorHandler.bind(this)
    })

    this.db.edit({
      collection: 'posts',
      docId: data.id,
      successHandler:()=>{console.log("Image Successfully handaled.")},
      errorHandler: ()=>{console.log("Image did not upload.")},
      data : { imageURL:  data.id }
    })
  }

  updatePostAfterImageUpload(data){
    // set the post : postImg to the correct thing corresponding imgUrl
    this.db.edit({
      collection: 'posts',
      docId: this.lastPostId,
      successHandler:()=>{console.log("Image Successfully handaled.")},
      errorHandler: ()=>{console.log("Image did not upload.")},
      data : { imageURL:  data }
    })
  }

  postErrorHandler(err){
    console.log(err)
  }

  //=== Checking for valid Inputs ==============================================

  checkPostImage(){
    if(this.postImageInput){
      if(this.postImageInput.files[0]){
        return true;
      } else {
        console.log("Post image exists but not image.")
        return false;
      }
    } else{
      console.log("Post image does not exist.")
      return false;
    }
  }

  checkPostContent(){
    if(this.postContent){
      if(this.postContent.value && this.postContent.value !== 0){
        return true;
      } else {
        console.log("Post content exists but not image.")
        return false;
      }
    } else{
      console.log("Post content does not exist.")
      return false;
    }
  }

  checkPostUserIsAuthorized(){
    return this.firebase.auth().currentUser?true:false;
  }

  checkPostItems(){
    console.log('testing')
  }

  getPostInfo(){
    return {
      ownerId : 'test',//this.firebase.auth().currentUser.uid,
      date : new Date(),
      content : this.state.postContent,
      imageURL : "none",
      location : { long : this.state.userLocation.lng, lat: this.state.userLocation.lat},
      comments : [],
      likes : 0
    }
  }

  showImgPreview(){
    var reader = new FileReader();
    reader.onload = (e)=>{ this.postImagePreview.src = e.target.result };
    reader.readAsDataURL(this.postImageInput.files[0]);
    this.postImagePreview.style.display = '';
  }

  pinLocation(){
    this.showMapPreview()
  }

  testGoogleApi(){
    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.195736&type=restaurant&key=AIzaSyAwojlX6Zlg8WX3RrJCijGPvHzDDciMoYk')
    .then((loc)=>{
      console.log(loc);
    })
    .catch((msg)=>{
      console.log(msg);
    })
  }

  pinUsersLocation(){
    let userLocaion =
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({ userLocation :{ lat: position.coords.latitude, lng: position.coords.longitude } });
        this.testGoogleApi()
      },
      (error)=>{ console.log(error) },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000
      }
    )
  }

  showMapPreview(){
    console.log(this.state.mapVisability)
    this.setState({
      mapVisability: this.state.mapVisability==='none'?'':'none'
    })
  }

  //=== Component Lifecycle ====================================================

  componentDidMount(){
    this.testGoogleApi()
  }
  render(){
    return(
      <Card>
        <View>
          <Text h4 style={{textAlign:'center'}}>Post New</Text>
          <Image src={ MapMarkerIcon } style={{height:"50",width:"50"}}/>
          <FormLabel>Post Content</FormLabel>
          <FormInput onChangeText={(text) => this.setState({ postContent : text})} style={{borderStyle:'solid',borderColor:'black'}}/>
          <TouchableHighlight  onPress={ this.pinUsersLocation.bind(this) }>
            <Image source={ MapMarkerIcon } style={{ height:25, width:25 }}/>
          </TouchableHighlight>
          <Button onPress={ this.postItem.bind(this) } title='Post' buttonStyle ={{backgroundColor: '#7acc8f',borderRadius:10, marginTop: 20}}/>
        </View>
      </Card>
    )
  }
}
