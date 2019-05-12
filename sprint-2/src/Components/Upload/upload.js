import React from 'react';
import './Upload.scss';
export class Upload extends React.Component {
    render(){
        return(
            <section className = "upload">
                <div className="upload--sidemargin">
                    <h1 className="upload__header">Upload Video</h1>
                    <form className="upload__form">
                        <div className="upload__form--desktop">
                            <div className="upload__form--desktopImage">
                                <label className="upload__form__labels">VIDEO THUMBNAIL</label>
                                <img className="upload__form__image" src={require(`../../Assets/Images/Upload-video-preview.jpg`)} alt="Video thumbnail"></img>
                            </div>
                            <div className="upload__form--desktopInput">
                                <label className="upload__form__labels">TITLE YOUR VIDEO</label>
                                <input type="text" name="upload-title" id="upload-title"/>
                                <label className="upload__form__labels">ADD A VIDEO DESCRIPTION</label>
                                <textarea name="upload-description" id="upload-description" rows="5"/>
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