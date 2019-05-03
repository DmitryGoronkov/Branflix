import React from 'react';
import './commentsAdd.scss';
export class CommentsAdd extends React.Component {
    render(){
        return(
            <section class="commentsec">
                <h2 class="commentsec__header">3 comments</h2>
                <div class="commentsec__inputsec">
                    <div class ="commentsec__inputsec__image"></div>
                    <form class ="commentsec__inputsec__form">
                        <label for="comment">JOIN THE CONVERSATION</label>
                        <textarea name="comment" id="comment" rows="3"></textarea>
                        <button class="commentsec__inputsec__form__button" type="submit">COMMENT</button>
                    </form>
                </div>
            </section>
        )
    }
}
