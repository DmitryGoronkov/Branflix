import React from 'react';
import {Headermain} from '../Header/header.js';
import {Video} from '../Video/video.js'
import {VideoInfo} from '../VideoInfo/videoinfo.js'
import {CommentsAdd} from '../CommentsAdd/commentsAdd.js'
import {CommentsList} from '../CommentsList/commentsList.js'
// import Video2 from '../../Assets/Video/BrainStationSampleVideo.mp4'


export class Main extends React.Component {

  state = {
    bigVid: {
      id: '0',
      title: 'BMX Rampage: 201 Highlights',
      description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
      channel: 'Red Cow',
      image: 'video-list-0.jpg',
      views: '1,001,023',
      likes: '110,985',
      duration: '0:20',
      video:'BrainStationSampleVideo.mp4',
      timestamp: 1557003818445,
      comments: [
        { id: "0",
          name: "Micheal Lyons",
          date: "12/18/2018",
          comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
          image: "Michael.jpg"
        },
        { id: "1",
          name: "Gary Wong",
          date: "12/12/2018",
          comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          image: "Gary.jpg"
        },
        { id: "2",
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          image: "Teo.jpg"
        }
      ]
    },
    vidList: {
      id: 'type of <string>', 
      title: 'type of <string>', 
      channel: 'type of <string>', 
      image: 'type of <string>' 
    }
  }

  
  render() {
    const {title,description,channel,views,likes,video,image,timestamp} = this.state.bigVid;
    const numberOfComments = this.state.bigVid.comments.length;
    return (
      <div> 
          <Headermain></Headermain>
          <Video video={video} image={image}></Video> 
          <VideoInfo title={title} description={description} channel={channel} views={views} likes={likes} timestamp={timestamp}></VideoInfo>
          <CommentsAdd numberOfComments={numberOfComments}></CommentsAdd>
          {this.state.bigVid.comments.map((item) => {
                      return (<CommentsList 
                              key={item.id}
                              name={item.name}
                              date={item.date} 
                              comment={item.comment}
                              comImage={item.image} 
                              />);                  }
          )
          }

     
     
     
    
      </div>
    );
  }
}


