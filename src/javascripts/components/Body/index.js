import React from 'react';

import Home from './Home/index.js';
import About from './About/index.js';
import Contact from './Contact/index.js';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Body extends React.Component {
  render() {
    return(
      <article className={ ("content") }>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>

        <aside className="aside">
          { this.props.children }
        </aside>
      </article> 
    )
  }
}

export default Body