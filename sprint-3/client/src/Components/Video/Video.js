import React from 'react';
import './video.scss';
import playIcon from '../../Assets/Icons/SVG/Icon-play.svg'
import fullIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg'
import pauseIcon from '../../Assets/Icons/SVG/Icon-pause.svg'
const apiKey="?api_key=22945958-e024-4268-bb49-d7e141ec7dd2";
export class Video extends React.Component {
    state = {
        play: false
    }
    playButton = (e) =>{
        e.preventDefault();
        if (this.state.play === false){
            this.refs.video.play();
            this.setState({play: true})
        } else {
            this.refs.video.pause();
            this.setState({play: false})
        }
      }
    componentDidUpdate(){
        if (this.state.play){
            this.refs.play.setAttribute("src", pauseIcon)
        } else {
            this.refs.play.setAttribute("src", playIcon)
        }
    }
    render(){
        const {video,image,duration} = this.props;
        return(
            <main className="mainV">
                <video ref="video" src={video+apiKey} className = "mainVideo" poster={image}></video>
                <form className="controls">
                    <button className="controls__play" onClick={this.playButton}> 
                        <img ref="play" src={playIcon} alt="play"/>
                    </button>
                    <div className="controls__bar">
                        <div className="controls__bar__inside"></div>
                        <div className="controls__bar__duration">0:00/{duration}</div>
                    </div>
                    <div className="controls__right">
                        <img src={fullIcon} alt="play"/>
                        <img src={volumeIcon} alt="play"/>
                    </div>
                </form>
            </main>
        )
    }
}
