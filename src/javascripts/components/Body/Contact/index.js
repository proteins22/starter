import React from 'react';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'contact',
		}
	}

	render() {
	    return(
			<section className={this.state.className}>
				<h2>Contact</h2>
			</section>
		)
	}
}

export default Contact