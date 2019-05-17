import React from 'react';
import './main.scss';
import {Video} from '../Video/Video.js'
import {VideoInfo} from '../VideoInfo/Videoinfo.js'
import {CommentsAdd} from '../CommentsAdd/CommentsAdd.js'
import {CommentsList} from '../CommentsList/CommentsList.js'
import timeConversion from '../TimeConversion/TimeConversion.js'
import commentsImageAssign from '../CommentsImageAssign/CommentsImageAssign.js'
import {NextVideo} from '../NextVideo/NextVideo.js'
import axios from 'axios'
import {Link} from "react-router-dom"

const apiKey="22945958-e024-4268-bb49-d7e141ec7dd2"

export class Main extends React.Component {
  state = {
    comment: '',
    commentAdded: false,
    mainpage: true,
    bigVid: { comments: []},
    vidList: []
  };
  handleCommentChange = (e) =>{
    
    this.setState({
      comment: e.target.value
    })
    
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    let id = '';
    if (!this.props.match.params.id){
      id="1af0jruup5gu"
    } else {
      id = this.props.match.params.id
  }
  
    axios.post (`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${apiKey}`, {
      name: "Mohan",
      comment: this.state.comment
      })
      .then (response => {
        console.log(response);
        this.setState({
          commentAdded:true
        })
      })
  }
  componentDidMount(){
    axios.get (`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then (response => {
        this.setState({vidList: response.data})
      })
      .catch (error => {
        console.log("Error receiving data")
      })
    axios.get (`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${apiKey}`)
      .then (response => {
        this.setState({bigVid: response.data})
        console.log(response.data);
      })
      .catch (error => {
        console.log("Error receiving data")})
      }

  componentDidUpdate(){
    if (this.state.commentAdded){
      console.log("comment added");
      let id = "";
      if (this.props.match.params.id){
        id = this.props.match.params.id;
      } else { 
        id = "1af0jruup5gu"
      }
      
      axios.get (`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${apiKey}`)
      .then (response => {
        this.setState({bigVid: response.data, commentAdded: false})
        console.log(response.data);
      })
      .catch (error => {
        console.log("Error receiving data")})
      

      
    }
    if (this.state.bigVid.id !== this.props.match.params.id && this.props.match.params.id){
      axios
        .get (`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/?api_key=${apiKey}`)
        .then (response => {
          this.setState({bigVid: response.data, mainpage: false})
          console.log(response.data);
        })
        .catch (error => {
          console.log("Error receiving data")
        })
    }
    if (!this.state.mainpage && !this.props.match.params.id){
      axios
        .get (`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then (response => {
          this.setState({vidList: response.data})
        })
        .catch (error => {
          console.log("Error receiving data")
        })
      axios
        .get (`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${apiKey}`)
        .then (response => {
          this.setState({bigVid: response.data, mainpage: true})
          console.log(response.data);
        })
        .catch (error => {
          console.log("Error receiving data")})
        } 
      }
      
  
  render() {
    const {title,description,channel,views,likes,video,image,timestamp,duration} = this.state.bigVid;
    const numberOfComments = this.state.bigVid.comments.length;
    const listToRender = [];
    
    for (let i=0; i<this.state.vidList.length; i++){
      if (this.state.vidList[i].id !== this.state.bigVid.id){
        listToRender.push(this.state.vidList[i]);
      }
    }
    
    return (
      <main>
        <Video video={video} image={image} duration={duration}></Video>
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
            <CommentsAdd numberOfComments={numberOfComments} submit={this.handleSubmit} change={this.handleCommentChange} val={this.state.comment}></CommentsAdd>
            {this.state.bigVid.comments.map((item, index) => {
              return (<CommentsList
                key={index}
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
            {listToRender.map((item, index) => {
              return (<Link to={`/videos/${item.id}`}><NextVideo
                key={index}
                title={item.title}
                channel={item.channel}
                nextVideoImage={item.image}/></Link>);
              })
            }
          </div>
        </section>
      </main>
    );
  }
}


