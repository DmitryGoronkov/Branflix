import React from 'react';
import './main.scss';
import {Navbar} from '../Navigation/navbar.js';
import {Video} from '../Video/video.js'
import {VideoInfo} from '../VideoInfo/videoinfo.js'
import {CommentsAdd} from '../CommentsAdd/commentsAdd.js'
import {CommentsList} from '../CommentsList/commentsList.js'
import timeConversion from '../TimeConversion/timeConversion.js'
import {NextVideo} from '../NextVideo/nextVideo.js'
import axios from 'axios'
import {Link} from "react-router-dom"

const apiKey="22945958-e024-4268-bb49-d7e141ec7dd2"

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
        timestamp: 1555700251844,
        comments: [
          { id: "0",
            name: "Micheal Lyons",
            date: 1545700251844,
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
            image: "Michael.jpg"
          },
          { id: "1",
            name: "Gary Wong",
            date: 1535700251844,
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            image: "Gary.jpg"
          },
          { id: "2",
            name: "Theodore Duncan",
            date: 1531700251844,
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            image: "Teo.jpg"
          }
        ]
      },
  
    vidList: []
      
 
  };
  componentDidMount(){
    axios.get (`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then (response => {
        this.setState({vidList: response.data})
      })
      .catch (error => {
        console.log("Error receiving data")})
  }
  
  render() {
    const {title,description,channel,views,likes,video,image,timestamp} = this.state.bigVid;
    const numberOfComments = this.state.bigVid.comments.length;
    const listToRender = [];
    console.log(this.state.vidList);
    for (let i=0; i<this.state.vidList.length; i++){
      if (this.state.vidList[i].id !== this.state.bigVid.id){
        listToRender.push(this.state.vidList[i]);
      }
    }
    
    return (
      <main> 
          <Navbar></Navbar>
            <Video video={video} image={image}></Video> 
            <section className="desktopLayout">
             <div>
              <VideoInfo 
                      title={title}
                      description={description} 
                      channel={channel} 
                      views={views} 
                      likes={likes} 
                      timestamp={timestamp}>
              </VideoInfo>
              <CommentsAdd numberOfComments={numberOfComments}></CommentsAdd>
              {this.state.bigVid.comments.map((item) => {
                        return (<CommentsList 
                                key={item.id}
                                name={item.name}
                                date={timeConversion(item.date)} 
                                comment={item.comment}
                                comImage={item.image} 
                                />);  
                        })
              }
              <div className="desktopBottom"></div>
            </div>
            <div>
              <div className="label">NEXT VIDEO</div>
              {listToRender.map((item) => {
                return (<Link to= {`/mainvideo/${item.id}`}><NextVideo 
                                  key={item.id}
                                  title={item.title}
                                  channel={item.channel} 
                                  nextVideoImage={item.image}
                                    
                                /></Link>);   
                            
                        })
                          
              
              }
            </div>
          </section>
        </main>
    );
  }
}


