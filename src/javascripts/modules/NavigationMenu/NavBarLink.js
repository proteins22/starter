import React from 'react';

import {Link } from "react-router-dom";

class NavBarLink extends React.Component {
	render() {
		return (
			<Link to={this.props.url}>{this.props.text}</Link>
		);
	}
}

export default NavBarLink;