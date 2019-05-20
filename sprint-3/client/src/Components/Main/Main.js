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
import shortid from 'shortid'



export class Main extends React.Component {
  state = {
    comment: '',
    commentAdded: false,
    likeAdded: false,
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
  
    axios.put (`http://localhost:8080/videos/${id}`, {
      name: "Mohan",
      comment: this.state.comment,
      id: shortid.generate(),
      likes: 0,
      timestamp: Date.now()
      })
      .then (response => {
        console.log(response);
        this.setState({
          commentAdded:true
        })
      })
  }
  addLike = (e) => {
    if (!this.state.bigVid.likeAdded){
      let id = '';
      if (!this.props.match.params.id){
          id="1af0jruup5gu"
      } else {
      id = this.props.match.params.id
      }
      const updatedLikes = parseInt(this.state.bigVid.likes) + 1;
      axios.put (`http://localhost:8080/videos/${id}/likes`, {
          likes: updatedLikes,
          likeAdded: true
      })
          .then (response => {
              this.setState({likeAdded: true})
          
          })
    }
    

}
  componentDidMount(){
    axios.get (`http://localhost:8080/videos`)
      .then (response => {
        this.setState({vidList: response.data})
      })
      .catch (error => {
        console.log("Error receiving data")
      })
    axios.get (`http://localhost:8080/videos/1af0jruup5gu/`)
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
      
      axios.get (`http://localhost:8080/videos/${id}`)
      .then (response => {
        this.setState({bigVid: response.data, commentAdded: false})
        console.log(response.data);
      })
      .catch (error => {
        console.log("Error receiving data")})
      

      
    }

    if (this.state.likeAdded){
      console.log("like added");
      let id = "";
      if (this.props.match.params.id){
        id = this.props.match.params.id;
      } else { 
        id = "1af0jruup5gu"
      }
      
      axios.get (`http://localhost:8080/videos/${id}`)
      .then (response => {
        this.setState({bigVid: response.data, likeAdded: false})
        console.log(response.data);
      })
      .catch (error => {
        console.log("Error receiving data")})
    }
    if (this.state.bigVid.id !== this.props.match.params.id && this.props.match.params.id){
      axios
        .get (`http://localhost:8080/videos/${this.props.match.params.id}`)
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
        .get (`http://localhost:8080/videos`)
        .then (response => {
          this.setState({vidList: response.data})
        })
        .catch (error => {
          console.log("Error receiving data")
        })
      axios
        .get (`http://localhost:8080/videos/1af0jruup5gu/`)
        .then (response => {
          this.setState({bigVid: response.data, mainpage: true})
          console.log(response.data);
        })
        .catch (error => {
          console.log("Error receiving data")})
        } 
      }
      
  
  render() {
    const {title,description,channel,views,likes,likeAdded,video,image,timestamp,duration} = this.state.bigVid;
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
              timestamp={timestamp}
              addLike={this.addLike}
              likeAdded={likeAdded}>
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


