import React from 'react';
import {Main} from './Components/Main/main.js';
import {BrowserRouter, Route, Switch} from "react-router-dom"
class App extends React.Component {
  render() {
    return (
      <div> 
          <BrowserRouter>
              <Switch>

                  <Route path="/" exact component={Main} />     
                  <Route path="/mainvideo/:id" component={Main} />           
              </Switch>
          
          </BrowserRouter>
         

      </div>
    );
  }
}

export default App;
