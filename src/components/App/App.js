import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home';
import LetsTalk from '../LetsTalk/LetsTalk';
import '../../assets/styles/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/lets_talk' component={LetsTalk} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
