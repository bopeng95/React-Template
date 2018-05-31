import React, { Component } from 'react';
import './css/main.css';

class Home extends Component {

	constructor() {
		super();
		this.state = {
			classnames: ''
		}
	}

	render() {
		return (
			<div className={this.state.classnames}>
				<h4>React Project X</h4>
			</div>
		);
	}
}

export default Home;
