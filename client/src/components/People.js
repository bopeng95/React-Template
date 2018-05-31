import React from 'react';
import '../css/contact.css';

export default class People extends React.Component { 

	constructor() {
		super();
		this.state = {
			classnames: '',
		}
	}

	render() {
		return (
			<div>
				<h5>People that submitted...</h5>
				<ul>
					{this.props.ppl.map(p => 
						<li key={p.id}>{p.name}'s email is {p.email}</li>
					)}
				</ul>
			</div>
		)
	}
}