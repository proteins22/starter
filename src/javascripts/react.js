import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './modules/NavigationMenu/NavBar';
import { NavData } from './modules/NavigationMenu/NavData.js';
//import Game from './modules/tic-tac-toe/tic-tac-toe';

// ========================================

let modals = (
	<div>
		<NavBar items={ NavData }/>
	</div>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
    	modals,
    	document.getElementById('wrapper')
	);
});