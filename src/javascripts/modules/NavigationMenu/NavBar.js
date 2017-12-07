import React from 'react';

import NavBarItem from './NavBarItem';
import { CSSTransitionGroup } from 'react-transition-group'



class NavBar extends React.Component {


	generateItem(item) {
		return (
      <NavBarItem
        key={item.text} 
        text={item.text}
        url={item.url} 
        submenu={item.submenu}
      />
    )
  }

	render() {
  	let items = this.props.items.map(this.generateItem);
  	return (
    		items
  	);
	}
}

export default NavBar;