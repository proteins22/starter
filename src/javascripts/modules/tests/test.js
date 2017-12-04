import React from 'react';

class VacancySign extends React.Component(){
	render(){
		let text;
		if( this.props.hasvacancy ) {
			text = 'Vacancy';
		}
		else {
			text = 'No Vacancy';
		}
		return(
			<div>{text}</div>
		)
	}
}

export default VacancySign