import React from 'react';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';
import { NavDropdown } from 'react-bootstrap';


class NavBarItem extends React.Component {

	generateLink(){

		let NavItem;

		if(this.props.submenu){
			NavItem = null
		}
		else {
			NavItem = <NavBarLink
				key={this.props.url}
				url={this.props.url}
				text={this.props.text}
			/>
		}
		//Right now we don't need our class but what if we wanted to change the text, add an arrow or something? 
		//Single responsibility principles tell us that it our "Item" should not handle this.
		return (
			NavItem
		)
	}
	
	generateSubmenu(){
		//We generate a simple Navbar (the parent). 
		//Spoilers: it takes items as its argument. 
		return (
			<NavDropdown 
				key = {this.props.text}
				href={'#'+this.props.url}
				title={this.props.text}
				id="nav-dropdown">
					<NavBar
						key={this.props.text} 
						items={this.props.submenu} 
					/>
			</NavDropdown>
		)
	}
	
	generateContent(){
		let content = [ this.generateLink() ];
			if(this.props.submenu){
				//If there is a submenu in our data for this item
				//We add a generated Submenu to our content
				content.push( this.generateSubmenu() );
			}
		return content;
	}
	
	render () {
		return (
			this.generateContent()
		);
	}
}

export default NavBarItem;