import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Modules
	//Nav
	import NavBar from './modules/NavigationMenu/NavBar';
	import { NavData } from './modules/NavigationMenu/NavData.js';

//Header
import Header from './components/Header/index.js';

//Navigation
import Navigation from './components/Navigation/index.js'

//Body
import Body from './components/Body/index.js';

//Sidebar
import Sidebar from './components/Sidebar/index.js';

//Footer
import Footer from './components/Footer/index.js';


class App extends React.Component {
	render() {
		return(
			<Router>
				<div>

					<Header>
						<NavBar items={ NavData }/> 
					</Header>

					<Body>
						<Sidebar/>
					</Body>

					<Footer>
						<NavBar items={ NavData }/> 
					</Footer>

				</div>
			</Router>
		)
	}
}

export default App