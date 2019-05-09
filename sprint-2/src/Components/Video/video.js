import React from 'react';
import './video.scss';
const apiKey="?api_key=22945958-e024-4268-bb49-d7e141ec7dd2";
export class Video extends React.Component {
    
    render(){
        const {video,image} = this.props;
        return(
            <main>
                <video src={video+apiKey} className = "mainVideo" controls poster={image}>
                  
                </video>
            </main>
        )
    }
}
