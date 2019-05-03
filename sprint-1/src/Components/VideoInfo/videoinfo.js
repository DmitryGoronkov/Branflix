import React from 'react';
import './videoinfo.scss';
import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';
export class VideoInfo extends React.Component {
    render(){
        const {title,description,channel,views,likes} = this.props;
        return(
            <main className="main">
                <h1 className="main__header">{title}</h1>
                <div className="main__subinfo">
                    <div className="main__subinfo__by">By {channel}</div>
                    <div className="main__subinfo__date">12/18/2018</div>
                </div>
                <div className="main__subbar">
                    <div className="main__subbar__views">
                        <img className="main__subbar__likes__icon" src={viewsIcon}/>
                        <span>{views}</span>
                    </div>
                    <div className="main__subbar__likes">
                        <img className="main__subbar__likes__icon" src={likesIcon}/>
                        <span>{likes}</span>
                    </div>
                </div>
                <div className="main__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</div>
            </main>
        )
    }
}