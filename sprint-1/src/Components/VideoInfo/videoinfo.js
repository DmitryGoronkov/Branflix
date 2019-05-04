import React from 'react';
import './videoinfo.scss';
import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';
export class VideoInfo extends React.Component {
    timestampConversion(timestamp){
        const timeToConvert = new Date(timestamp);
        const year = timeToConvert.getFullYear();
        let month = timeToConvert.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        let day = timeToConvert.getDate();
        if (day < 10) {
            day = `0${day}`;
        }
        const convertedTime = `${month}/${day}/${year}`;
        return convertedTime;
    }
    render(){
        const {title,description,channel,views,likes,timestamp} = this.props;
        return(
            <main className="main">
                <h1 className="main__header">{title}</h1>
                <div className="main__subinfo">
                    <div className="main__subinfo__by">By {channel}</div>
                    <div className="main__subinfo__date">{this.timestampConversion(timestamp)}</div>
                </div>
                <div className="main__subbar">
                    <div className="main__subbar__views">
                        <img className="main__subbar__likes__icon" src={viewsIcon} alt="views-icon"/>
                        <span>{views}</span>
                    </div>
                    <div className="main__subbar__likes">
                        <img className="main__subbar__likes__icon" src={likesIcon} alt="likes-icon"/>
                        <span>{likes}</span>
                    </div>
                </div>
                <div className="main__description">{description}</div>
            </main>
        )
    }
}