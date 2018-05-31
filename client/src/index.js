import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from 'react-router-dom';
// import styled from 'styled-components';
import './css/main.css';
import Home from './Home.js';
import Contact from './components/Contact.js'
import registerServiceWorker from './registerServiceWorker';

// const StyledLink = styled(Link)`
// 	text-decoration:none;
// 	color:#B1B1B1;
// 	font-size:18px;
// 	&:hover {
// 		color:black;
// 	}
// 	&:active {
// 		color:turquoise;
// 	}
// `;

class NavLink extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'link active' : 'link';

        return(
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</nav>
	</header>
)

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/contact' component={Contact}/>
		</Switch>
	</main>
)

const App = () => (
	<div className="my-container">
		<Header/>
		<Main/>
	</div>
)

ReactDOM.render(
	(<Router>
		<App/>
	</Router>
	),document.getElementById('root')
);
registerServiceWorker();
