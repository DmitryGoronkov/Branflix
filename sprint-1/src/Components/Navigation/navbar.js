import React from 'react';
import './navbar.scss';
import logo from '../../Assets/Logo/Logo-brainflix.svg'
import ava from '../../Assets/Images/Mohan-muruge.jpg'
import upload from '../../Assets/Icons/SVG/Icon-upload.svg'
import searchIcon from '../../Assets/Icons/SVG/Icon-search.svg'
export class Navbar extends React.Component {
    render(){
        return(
            <header className = "main-header">
                <img src={logo}  className="main-header__logo" alt="logo" />
                <form className="main-header__search-container">
                    <button className="main-header__search-container__button" type="submit"><img className="main-header__search-container__icon" src ={searchIcon} alt="S"/></button>
                    <input type="text" className="main-header__search-container__bar" placeholder="Search" name="search"></input>
                </form>
                <div className="main-header--row">
                    <button className="main-header__navbutton">
                        <img src={upload} alt="plus"/>
                        <div className="main-header__navbutton__text" >UPLOAD</div>
                    </button>
                    <img src ={ava} alt="ava" className="main-header__image"/>
                </div>
            </header>
        )
    }

}