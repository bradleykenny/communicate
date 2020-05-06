import React, { Component } from 'react';
import "../style/Header.css";

class Header extends Component {
	render() {
		return (
			<header>
				<h1 id="logo">
					<a href="/" className="headerLogo">communicate</a>
				</h1>
				<p>
					<a href="/">Home</a>
					<a href="/">Profile</a>
					<a href="/">Groups</a>
					<a href="/">Settings</a>
				</p>
			</header>
		);
	}
}

export default Header;