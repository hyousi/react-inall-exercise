import React, { Component } from 'react';
import './styles/app.less';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Timer from './components/Timer';
import NoMatch from './components/Nomatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calc' component={Calculator} />
            <Route exact path='/timer' component={Timer} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
