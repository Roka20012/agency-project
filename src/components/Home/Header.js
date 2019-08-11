import React from 'react';
import {NavLink, Link} from 'react-router-dom';

export default () => (
    <header>
			<div className="wrapper">
				<Link to="/"><button className="logo">My Magazino</button></Link>
				<a href="#" className="hamburger"></a>
				<nav>
					<ul>
						<li><NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink></li>
						<li><NavLink activeClassName="is-active" className="arrow" to="/buy">Buy</NavLink></li>
						<li><NavLink activeClassName="is-active" to="/sell">Sell</NavLink></li>
						<li><NavLink activeClassName="is-active" to="/contact">Contact</NavLink></li>
					</ul>
					<NavLink to="/login" activeClassName="is-active login" className="login_btn">Login</NavLink>
				</nav>
			</div>
    </header>
);
