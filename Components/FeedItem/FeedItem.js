import React, { Component } from 'react';

import { View, Text } from 'react-native';

//=== Style ====================================================================
import './FeedItem'
//=== Components ===============================================================

import Thumbnail from './../../Components/Thumbnail/Thumbnail';

import Storage from './../../Classes/Firebase/CloudStorage/CloudStorage';
import DB from './../../Classes/Firebase/Database/Database';

export default class FeedItem extends Component{

  constructor(props){
    super(props);
    this.storage = new Storage(this.props.firebase);
    this.state = {
      thumbnailImg : 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_1280.jpg',
      content : "...Loading",
      ownerUser : "...Loading",
      postImg : 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_1280.jpg',
      likes : 0,
      dislikes : 0,
      comments : []
    }
  }

  // Thumbnail
  getThumbnail(){
    this.storage.getImgURL({
      successHandler : this.showThumbnail.bind(this),
      errorHandler : (err)=>{console.log(err)},
      path : "profilePics",
      id : this.props.post.data().ownerId
    })
  }

  showThumbnail(url){
    this.setState({ thumbnailImg: url })
  }

  // Post Image

  getPostImage(){
    this.storage.getImgURL({
      successHandler : this.showPostImg.bind(this),
      errorHandler : (err)=>{ console.log(err) },
      path : "postImages",
      id : this.props.post.data().imageURL
    })
  }

  showPostImg(url){
    this.setState({ postImg: url })
  }

  // Comments

  getComments(){

  }

  // Component Lifecycle

  componentDidMount(){
    this.getThumbnail()
    this.getPostImage()
    this.setState({
      content : this.props.post.data().content
    })
  }
  //=== Component Life Cycle ===================================================

  render(){
    return(
        <View>
          <Thumbnail src={ this.props.imageURL }/>
          <View>
            <Image src={{}} />
            <View>
              { this.props.content }
            </View>
            <Button>Submit</Button>
            <TextInput />
          </View>
        </View>
    )
  }
}
