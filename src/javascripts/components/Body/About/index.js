import React from 'react';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'about',
		}
	}

	render() {
	    return(
			<section className={this.state.className}>
				<h2>About</h2>
			</section>
		)
	}
}

export default About