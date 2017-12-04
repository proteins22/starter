import React from 'react';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';

class NavBarItem extends React.Component {

	generateLink(){
		//Right now we don't need our class but what if we wanted to change the text, add an arrow or something? 
		//Single responsibility principles tell us that it our "Item" should not handle this.
		return (
			<NavBarLink 
				key={this.props.url}
				url={this.props.url}
				text={this.props.text}
			/>
		)
	}
	
	generateSubmenu(){
		//We generate a simple Navbar (the parent). 
		//Spoilers: it takes items as its argument. 
		return (
			<NavBar 
				key={this.props.text} 
				items={this.props.submenu} 
			/> 
		)
	}
	
	generateContent(){
		let content = [this.generateLink()];
			if(this.props.submenu){
				//If there is a submenu in our data for this item
				//We add a generated Submenu to our content
				content.push(this.generateSubmenu());
			}
		return content;
	}
	
	render () {
		return (
			<li>
				{this.generateContent()}
			</li>
		);
	}
}

export default NavBarItem;