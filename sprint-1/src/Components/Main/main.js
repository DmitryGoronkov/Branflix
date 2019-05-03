import React from 'react';
import {Headermain} from '../Header/header.js';
import {Video} from '../Video/video.js'
import {VideoInfo} from '../VideoInfo/videoinfo.js'
import {CommentsAdd} from '../CommentsAdd/commentsAdd.js'
import {CommentsList} from '../CommentsList/commentsList.js'


export class Main extends React.Component {

  state = {
    bigVid: {
      id: '1',
      title: 'BMX Rampage: 201 Highlights BLALA',
      description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
      channel: 'Red Cow',
      image: 'type of <string>',
      views: '1,001,023',
      likes: '110,985',
      duration: '0:20',
      video: 'type of <string>',
      timestamp: 'type of <number>',
      comments: []
    },
    vidList: {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }
  }

  
  render() {
    const {title,description,channel,views,likes} = this.state.bigVid;
    return (
      <div> 
          <Headermain></Headermain>
          <Video></Video>
          <VideoInfo title={title} description={description} channel={channel} views={views} likes={likes}></VideoInfo>
          <CommentsAdd></CommentsAdd>
          <CommentsList></CommentsList>

     
     
     
    
      </div>
    );
  }
}


