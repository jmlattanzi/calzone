import React, { Component } from 'react';
import Gallery from './components/Gallery/Gallery';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Dish from './components/Dish/Dish';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Gallery}>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1>Dishes</h1></Link>
        </div> 
        <Switch>
          <Route path="/" exact component={Gallery} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/:id" component={Dish} />
          <Redirect from="/" to="/gallery" />
        </Switch>
      </div>
    );
  }
}

export default App;
