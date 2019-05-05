import React from 'react';
import './video.scss';
export class Video extends React.Component {
    render(){
        const {video,image} = this.props;
        return(
            <main>
                <video className = "mainVideo" controls poster={require(`../../Assets/Images/${image}`)}>
                    <source src={require(`../../Assets/Video/${video}`)}  type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </main>
        )
    }
}
