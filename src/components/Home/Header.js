import React from "react";
import { NavLink, Link } from "react-router-dom";

export default class extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			opned: false,
			active: false,
			showDropMenu: false
		}
	}
	
	handleToggle = () => {
		this.setState((prevState) => ({
			opned: !prevState.opned,
			active: !prevState.active
		}))
	}

	handleShowDropMenu = () => {
		this.setState({
			showDropMenu: !this.state.showDropMenu
		})
	}

    render() {
		const {opned, active, showDropMenu} = this.state;
		const hamburger = opned ? "hamburger opned" : "hamburger";
		const activeMenu = active ? "active" : "";

        return (
			<header>
				<div className="wrapper">
					<Link onClick={this.handleToggle} to="/"><button className="logo">My Magazino</button></Link>
					<a href="#" className={hamburger} onClick={this.handleToggle}></a>
					<nav className={activeMenu}>
						<ul>
							<li><NavLink exact={true} activeClassName="is-active" to="/">Home</NavLink></li>
							<li><NavLink className="hide-item" activeClassName="is-active drop-menu-item" to="/buy">Buy</NavLink></li>
							<li><NavLink className="hide-item" activeClassName="is-active drop-menu-item" to="/sell">Sell</NavLink></li>
							<li className="drop-down-menu"><button onClick={this.handleShowDropMenu} className="drop-down-button">Action</button></li>
							{showDropMenu ? 
								<ul className="drop-menu-list show-drop-menu-item">
									<li><NavLink onClick={this.handleShowDropMenu} activeClassName="is-active drop-menu-item" to="/buy">Buy</NavLink></li>
									<li><NavLink onClick={this.handleShowDropMenu} activeClassName="is-active drop-menu-item" to="/sell">Sell</NavLink></li>
								</ul>
								: 
							null }	
							<li><NavLink activeClassName="is-active" to="/contact">Contact</NavLink></li>
						</ul>
						<NavLink to="/login" activeClassName="is-active login" className="login_btn">Login</NavLink>
					</nav>
				</div>
			</header>
		)
    }
}
