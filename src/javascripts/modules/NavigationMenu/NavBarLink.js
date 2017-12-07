import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';


class NavBarLink extends React.Component {

	render() {
		return (
			<OldSchoolMenuLink
				activeOnlyWhenExact={ ( this.props.url==='/' ? true: false ) }
				to={ this.props.url }
				label={ this.props.text }
			/>
		)
	}
}

const OldSchoolMenuLink = ( {label, to, activeOnlyWhenExact, eventKey } ) => (
  <Route path={to} exact={activeOnlyWhenExact} children={ ({ match }) => (
	<NavItem href={('#' + to)} className={ (match ? 'active' : '') }>
		{label}
	</NavItem>
  )}/>
)

export default NavBarLink;