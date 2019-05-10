import React from 'react';
import {Main} from './Components/Main/main.js';
import {Navbar} from './Components/Navigation/navbar.js';
import {Upload} from './Components/Upload/upload.js'
import {BrowserRouter, Route, Switch} from "react-router-dom"
class App extends React.Component {
  render() {
    return (
      <div> 
          <BrowserRouter>
              <Navbar></Navbar>
              <Switch>

                  <Route path="/" exact component={Main} />  
                  <Route path="/upload/" component={Upload} />
                  <Route path="/:id" component={Main} />           
              </Switch>
          
          </BrowserRouter>
         

      </div>
    );
  }
}

export default App;
