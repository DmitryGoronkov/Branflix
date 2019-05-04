import React from 'react';
export class Video extends React.Component {
    render(){
        const {video,image} = this.props;
        return(
            <main>
                <video width="100%" height="183" controls poster={require(`../../Assets/Images/${image}`)}>
                    <source src={require(`../../Assets/Video/${video}`)}  type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </main>
        )
    }
}
