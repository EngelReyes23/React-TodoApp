import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="#">
					UseContext
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink
							exact
							to="/"
							activeClassName="active"
							className="nav-link"
							aria-current="page"
						>
							Home
						</NavLink>
						<NavLink
							exact
							to="/login"
							activeClassName="active"
							className="nav-link"
						>
							Login
						</NavLink>
						<NavLink
							exact
							to="/about"
							activeClassName="active"
							className="nav-link"
						>
							About
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
