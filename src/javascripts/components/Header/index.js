import React from 'react';

class Header extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			className: 'header',
		}
	}

	render() {
		return(
			<header className={this.state.className}>
				<h1>Header</h1>
				{ this.props.children }
			</header>
		)
	}
}

export default Header