import React from 'react';
import { BrowserRouter as Router, Route, HashRouter, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from 'react-bootstrap';

// Modules //
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
			<HashRouter>
				<div>
					<Header>
						<Navbar inverse collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand>
								<span></span>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav bsStyle="tabs">
								<NavBar items={ NavData }/> 
							</Nav>

							<Nav pullRight>
								<NavItem eventKey={1} href="#">Login</NavItem>
								<NavItem eventKey={2} href="#">Cart</NavItem>
							</Nav>
						</Navbar.Collapse>
						</Navbar>
					</Header>

					<Body>
						<Sidebar/>
					</Body>

					<Footer>
						<NavBar items={ NavData }/> 
					</Footer>

				</div>
			</HashRouter>
		)
	}
}

export default App