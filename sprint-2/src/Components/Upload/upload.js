import React from 'react';
import './upload.scss';
export class Upload extends React.Component {
    render(){
        return(
            <section className = "upload">
                <div className="upload--sidemargin">
                    <h1 className="upload__header">Upload Video</h1>
                    <form className="upload__form">
                        <label className="upload__form__labels">VIDEO THUMBNAIL</label>
                        <img className="upload__form__image" src={require(`../../Assets/Images/Upload-video-preview.jpg`)} alt="Video thumbnail"></img>
                    </form>
                </div>


            </section>
            
        )
    }
}