import React, { Component } from 'react';
import './styles/app.less';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import NoMatch from './components/Nomatch';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/calc' component={Calculator} />
            <Route exact path='/counter' component={Counter} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
