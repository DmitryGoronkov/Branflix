import React from 'react';
import './nextVideo.scss';
import textLimit from '../TextLimit/TextLimit.js';
// TextLimit function adds ... if the text is bigger then 2 lines and its only applied for mobile view.
// If the page is viewed in mobile and then switched to bigger screen, it has to be refreshed to have the ... removed. 
export class NextVideo extends React.Component {

    render(){
        return(
            <section className="nextVideo">
                <img src={`${this.props.nextVideoImage}`} alt="next video icon" className="nextVideo__image"/>
                <div className="nextVideo__description">
                    <div className="nextVideo__description__header">{textLimit(this.props.title)}</div>
                    <div className="nextVideo__description__by">{this.props.channel}</div>
                </div>
            </section>
        );
    }
}