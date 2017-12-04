import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './modules/NavigationMenu/NavBar';
import { NavData } from './modules/NavigationMenu/NavData.js';


//import Game from './modules/tic-tac-toe/tic-tac-toe';

// ======================================== // 
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)

let modals = (
	<div>
		<BasicExample/>
		<NavBar items={ NavData }/>  
	</div>
);

// ======================================== // 

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
    	modals,
    	document.getElementById('wrapper')
	);
});