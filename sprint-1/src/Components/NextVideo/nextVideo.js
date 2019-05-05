import React from 'react';
import './nextVideo.scss';
export class NextVideo extends React.Component {
    render(){
        return(
            <section className="nextVideo">
                <img src={require(`../../Assets/Images/${this.props.nextVideoImage}`)} className="nextVideo__image"/>
                <div className="nextVideo__description">
                    <div className="nextVideo__description__header">{this.props.title}</div>
                    <div className="nextVideo__description__by">{this.props.channel}</div>
                </div>
            </section>



        );
    }
}