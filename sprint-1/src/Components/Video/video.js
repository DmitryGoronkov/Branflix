import React from 'react';
import video from '../../Assets/Video/BrainStation Sample Video.mp4'
export class Video extends React.Component {
    render(){
        return(
            <main>
                <video width="100%" height="183" controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </main>
        )
    }
}