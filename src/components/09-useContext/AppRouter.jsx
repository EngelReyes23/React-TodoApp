import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	// Link
} from "react-router-dom";
import NavBar from "./NavBar";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import loginPage from "./LoginPage";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/login" component={loginPage} />
						<Route exact path="/about" component={AboutPage} />
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;
