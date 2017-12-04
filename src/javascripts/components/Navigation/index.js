import React from 'react';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'navigationWrapper',
		}
	}
	render() {
	    return(
			<div className={this.state.className}>
				<h1>Navigation</h1>
				{ this.props.children }
			</div>
		)
	}
}

export default Navigation