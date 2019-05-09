
import React from 'react';
import './commentsList.scss';
export class CommentsList extends React.Component {
    render(){
        return(
                <section className ="commentsec__existing">   
                    <div className="commentsec__existing__one">
                        <img className ="commentsec__existing__one__image" src={require(`../../Assets/Images/${this.props.comImage}`)} alt="ava"/>
                        <div className ="commentsec__existing__one__comment">
                            <div className ="commentsec__existing__one__comment__header">
                                <div className="commentsec__existing__one__comment__header--name">{this.props.name}</div>
                                <div className="commentsec__existing__one__comment__header--date">{this.props.date}</div>
                            </div>
                            <p className ="commentsec__existing__one__comment__body">{this.props.comment}</p>
                        </div>
                    </div>
                </section>
            )
    }
}