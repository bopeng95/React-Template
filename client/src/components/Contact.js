import React from 'react';
import ContactForm from './Form.js'
import '../css/contact.css';

export default class Contact extends React.Component { 

	constructor() {
		super();
		this.state = {
			classnames: ''
		}
	}

	render() {
		return (
			<div className={this.state.classnames}>
				<h4>Contact Page</h4>
				<ContactForm/>
			</div>
		)
	}
}