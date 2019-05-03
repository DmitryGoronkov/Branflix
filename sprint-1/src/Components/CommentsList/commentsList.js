
import React from 'react';
import './commentsList.scss';
export class CommentsList extends React.Component {
    render(){
        return(
                <section class ="commentsec__existing">   
                    <div class="commentsec__existing__one">
                        <div class ="commentsec__existing__one__image"></div>
                        <div class ="commentsec__existing__one__comment">
                            <div class ="commentsec__existing__one__comment__header">
                                <div class="commentsec__existing__one__comment__header--name">TEST</div>
                                <div class="commentsec__existing__one__comment__header--date">12/12/12</div>
                            </div>
                            <p class ="commentsec__existing__one__comment__body">TEST</p>
                        </div>
                    </div>
                </section>
        )
    }
}