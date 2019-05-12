import React from 'react';
import './Videoinfo.scss';
import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';
import timeConversion from '../TimeConversion/TimeConversion.js'
export class VideoInfo extends React.Component {

    render(){
        const {title,description,channel,views,likes,timestamp} = this.props;
        return(
            <main className="main">
                <h1 className="main__header">{title}</h1>
                <div className="main--tablet">
                    <div className="main__subinfo">
                        <div className="main__subinfo__by">By {channel}</div>
                        <div className="main__subinfo__date">{timeConversion(timestamp)}</div>
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
                </div>
                <div className="main__description">{description}</div>
            </main>
        )
    }
}