import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'footer',
		}
	}
	render() {
		return(
			<footer className={this.state.className}>
				<h1>Footer</h1>
				{ this.props.children }
			</footer>
		)
	}
}

export default Footer