import React from 'react';
//import People from './People.js';
//import axios from 'axios';
import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/contact.css';

export default class ContactForm extends React.Component { 

	constructor() {
		super();
		this.state = {
			classnames: '',
			people: [],
			name: '',
			email: ''
		}
		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		//this.postName = this.postName.bind(this);
	}

	componentDidMount() {
		//this.getPeople()
	}

	handleName = (e) => {this.setState({name: e.target.value})};
	handleEmail = (e) => {this.setState({email: e.target.value})};

	// getPeople = () => {
	// 	axios.get('/api/people')
	// 	.then(data => this.setState({people: data.data}));
	// };

	// postName = (e) => {
	// 	e.preventDefault();
	// 	let n = this.state.name; let em = this.state.email;
	// 	this.setState({name:'',email:''});
	// 	axios.post('/add', {name:n,email:em})
	// 	.then(this.getPeople())
	// }

	render() {
		return (
			<div>
				<div className="row">
					<div className="six columns">
						<form className={this.state.classnames} onSubmit={this.postName}>
							<label>Name</label>
							<input className="u-full-width" type="text" name="name" value={this.state.name} onChange={this.handleName} required/>
							<label>Email</label>
							<input className="u-full-width" type="email" name="email" value={this.state.email} onChange={this.handleEmail} required/><br/>
							<input type="submit" value="Submit"/>
						</form>
					</div>
					<div className="six columns">
						{/*<People ppl={this.state.people}/>*/}
					</div>
				</div>
			</div>
		)
	}
}
