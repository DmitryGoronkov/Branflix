import React from 'react';
import './commentsAdd.scss';
export class CommentsAdd extends React.Component {
    render(){
        return(
            <section className="commentsec">
                <h2 className="commentsec__header">{this.props.numberOfComments} comments</h2>
                <div className="commentsec__inputsec">
                    <div className ="commentsec__inputsec__image"></div>
                    <form className ="commentsec__inputsec__form">
                        <label htmlFor="comment">JOIN THE CONVERSATION</label>
                        <textarea name="comment" id="comment" rows="3"></textarea>
                        <button className="commentsec__inputsec__form__button" type="submit">COMMENT</button>
                    </form>
                </div>
            </section>
        )
    }
}
