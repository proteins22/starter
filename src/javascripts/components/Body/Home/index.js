import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'home',
		}
	}

	render() {
	    return(
			<section className={this.state.className}>
				<h2>Home</h2>
			</section>
		)
	}
}

export default Home