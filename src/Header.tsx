import React, { Component } from 'react';
import "./style/Header.css";

class Header extends Component {
	render() {
		return (
			<header>
				<h1>
					<a href="/">communicate</a>
				</h1>
				<p>
					<a href="/">Home</a>
					<a href="/">Profile</a>
				</p>
			</header>
		);
	}
}

export default Header;