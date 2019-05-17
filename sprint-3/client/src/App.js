import React from 'react';
import { Main } from './Components/Main/Main.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Upload } from './Components/Upload/Upload.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Errorpage } from "./Components/Error/Error.js"
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/upload/" component={Upload} />
            <Route path="/videos/:id" component={Main} />
            <Route component={Errorpage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
