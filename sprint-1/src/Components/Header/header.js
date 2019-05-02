import React from 'react';
import './header.scss';
// import './Styles/Mixins.scss'
import logo from '../../Assets/Logo/Logo-brainflix.svg'
import ava from '../../Assets/Images/Mohan-muruge.jpg'
import upload from '../../Assets/Icons/SVG/Icon-upload.svg'
export class Headermain extends React.Component {
    render(){
        return(
            <header className = "main-header">
                <img src={logo}  className="main-header__logo" alt="logo" />
                <input className="main-header__search" type="text" placeholder="Search"></input>
                <div className="main-header--row">
                    <button className="main-header__button"><img src={upload}/>UPLOAD</button>
                    <img src ={ava} alt="ava" className="main-header__image"/>
                </div>
            </header>
        )
    }

}