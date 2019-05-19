import React from 'react';
import './upload.scss';
import axios from 'axios';

export class Upload extends React.Component {
    state = {
        title: "",
        description: ""
    }
    handleTitleChange = (e) =>{
        this.setState({
          title: e.target.value
        })
    }
    handleDescriptionChange = (e) =>{
        this.setState({
          description: e.target.value
        })
    }
    handleVideoSubmit = (e) =>{
        e.preventDefault();
        this.setState({
          title: e.target.title.value,
          description: e.target.description.value
        })
        axios.post (`http://localhost:8080/videos/`, {
            title: this.state.title,
            description: this.state.description,
            })
            .then (response => {
                console.log(response);
            })
        
        
    }
    render(){
        return(
            <section className = "upload">
                <div className="upload--sidemargin">
                    <h1 className="upload__header">Upload Video</h1>
                    <form className="upload__form" onSubmit={this.handleVideoSubmit} >
                        <div className="upload__form--desktop">
                            <div className="upload__form--desktopImage">
                                <label className="upload__form__labels">VIDEO THUMBNAIL</label>
                                <img className="upload__form__image" src={require(`../../Assets/Images/Upload-video-preview.jpg`)} alt="Video thumbnail"></img>
                            </div>
                            <div className="upload__form--desktopInput">
                                <label className="upload__form__labels">TITLE YOUR VIDEO</label>
                                <input onChange={this.handleTitleChange} type="text" name="title" id="upload-title"/>
                                <label className="upload__form__labels">ADD A VIDEO DESCRIPTION</label>
                                <textarea onChange={this.handleDescriptionChange} name="description" id="upload-description" rows="5"/>
                            </div>
                        </div>
                        <div className="upload__form__border"></div>
                        <div className="upload__form--buttons">
                            <button className="upload__form__publish" type="submit">PUBLISH</button>
                            <button className="upload__form__cancel" type="submit">CANCEL</button>
                        </div>
                    </form>
                </div>


            </section>
            
        )
    }
}