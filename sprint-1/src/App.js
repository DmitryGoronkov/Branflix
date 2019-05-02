import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Headermain} from './Components/Header/header.js';
import {Video} from './Components/Video/video.js'
import {Main} from './Components/Main/main.js'
class App extends React.Component {
  render() {
    return (
      <div> 
          <Headermain></Headermain>
          <Video></Video>
          <Main></Main>

     
     
     
    
      </div>
    );
  }
}

export default App;
