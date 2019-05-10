import React from 'react';
import './main.scss';

import {Video} from '../Video/video.js'
import {VideoInfo} from '../VideoInfo/videoinfo.js'
import {CommentsAdd} from '../CommentsAdd/commentsAdd.js'
import {CommentsList} from '../CommentsList/commentsList.js'
import timeConversion from '../TimeConversion/timeConversion.js'
import commentsImageAssign from '../CommentsImageAssign/commentsImageAssign.js'
import {NextVideo} from '../NextVideo/nextVideo.js'
import axios from 'axios'
import {Link} from "react-router-dom"

const apiKey="22945958-e024-4268-bb49-d7e141ec7dd2"

export class Main extends React.Component {

  state = {
    
      bigVid: { comments: []},
  
    vidList: []
      
 
  };
  componentDidMount(){
    axios.get (`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then (response => {
        this.setState({vidList: response.data})
      })
      .catch (error => {
        console.log("Error receiving data")})
    axios.get (`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${apiKey}`)
      .then (response => {
        this.setState({bigVid: response.data})
        console.log(response.data);
      })
      .catch (error => {
        console.log("Error receiving data")})
  }
  componentDidUpdate(){
    // do i need to change the video? If statement
    if (this.state.bigVid.id !== this.props.match.params.id && this.props.match.params.id){
    axios.get (`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=${apiKey}`)
      .then (response => {
        this.setState({bigVid: response.data})
        console.log(response.data);
        console.log(this.state.bigVid);
        
      })
      .catch (error => {
        console.log("Error receiving data")})
    }
  }
  
  
  render() {
    const {title,description,channel,views,likes,video,image,timestamp} = this.state.bigVid;
    const numberOfComments = this.state.bigVid.comments.length;
    const listToRender = [];
    
    for (let i=0; i<this.state.vidList.length; i++){
      if (this.state.vidList[i].id !== this.state.bigVid.id){
        listToRender.push(this.state.vidList[i]);
      }
    }
    
    return (
      <main> 
          
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
                                date={timeConversion(item.timestamp)} 
                                comment={item.comment}
                                comImage={commentsImageAssign(item.name)} 
                                />);  
                        })
              }
              <div className="desktopBottom"></div>
            </div>
            <div>
              <div className="label">NEXT VIDEO</div>
              {listToRender.map((item) => {
                return (<Link to= {`/${item.id}`}><NextVideo 
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


