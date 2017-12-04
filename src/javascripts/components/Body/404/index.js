import React from 'react';

class NotFound extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: 'error404',
		}
	}

	render() {
	    return(
			<section className={this.state.className}>
				<h2>404 Not Found</h2>
			</section>
		)
	}
}

export default NotFound