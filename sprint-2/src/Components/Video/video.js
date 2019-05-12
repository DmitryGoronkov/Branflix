import React from 'react';
import './Video.scss';
import playIcon from '../../Assets/Icons/SVG/Icon-play.svg'
import fullIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg'
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg'
const apiKey="?api_key=22945958-e024-4268-bb49-d7e141ec7dd2";
export class Video extends React.Component {
    
    render(){
        const {video,image,duration} = this.props;
        return(
            <main className="mainV">
                <video src={video+apiKey} className = "mainVideo" poster={image}></video>
                <div className="controls">
                    <div className="controls__play">
                        <img src={playIcon} alt="play"/>
                    </div>
                    <div className="controls__bar">
                        <div className="controls__bar__inside"></div>
                        <div className="controls__bar__duration">0:00/{duration}</div>
                    </div>
                    <div className="controls__right">
                        <img src={fullIcon} alt="play"/>
                        <img src={volumeIcon} alt="play"/>
                    </div>
                </div>
            </main>
        )
    }
}
