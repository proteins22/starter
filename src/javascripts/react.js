import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
    	<App/>,
    	document.getElementById('wrapper')
	);
});