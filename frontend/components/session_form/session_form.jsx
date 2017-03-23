import React from 'react';
import { Link } from 'react-router';
import SplashNavBar from '../splash/splash_nav_bar';
// import onClickOutside from 'react-onclickoutside';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
			cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228320/th1bpj05jbdt7in5ehyl.png",
			profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490228344/mpixizp0lioxmh9w0l50.png"
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		// this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
		// this.props.errors = [];
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	// handleClickOutside(e){
	// 	e.preventDefault();
	// 	console.log("here");
	// 	this.setState({ username: "", password: "", name: ""});
	// 	this.props.router.push("/about");
	// }

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestLogin(e) {
		e.preventDefault();
		this.props.loginGuest({user: {username: "Guest", password: "password"}});
	}

	navLink() {
		if (this.props.formType === "login") {
			return (
				<div>
					<p>Don't have an account?
						&nbsp;
						<Link to="/signup" className="test">Sign up</Link>
					</p>
			</div>
		);
		} else {
			return (
				<div>
					<p>Already have an account?
						&nbsp;
						<Link to="/login" className="test">Log in</Link>
					</p>
				</div>
			);
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		const submitTitle = (this.props.formType === 'login') ? "Log In" : "Sign Up";
		return (
			<div className="login-form-container">
			<div className="login-form-container-layer">
				<SplashNavBar className="session-nav-bar" />
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to PhotOn
					<br/>
					Please {this.props.formType}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
							<input type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						<br/>
							<input type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						<br/>
						<input id="submit" type="submit" value={submitTitle} />
						<br/>
						<button id ="submit" className="submitButton" onClick={this.guestLogin}>Guest Mode</button>
						{this.navLink()}
				</div>
				</form>
			</div>
			</div>
		);
	}

}

export default SessionForm;
