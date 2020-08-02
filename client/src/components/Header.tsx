import React, { Component } from "react";
import "../style/Header.css";

import { UserData } from "../actions/user";
import User from "../types/User";

const Header = (props: { user: UserData }) => {
	const { user } = props;

	return (
		<header>
			<h1 id="logo">
				<a href="/" className="headerLogo">
					communicate
				</a>
			</h1>
			<p>
				<a href="/">Home</a>
				<a href="/">{props.user.email}</a>
				{localStorage.getItem("sessionID") && (
					<a href="/logout">Logout</a>
				)}
				{!localStorage.getItem("sessionID") && (
					<a href="/login">Login</a>
				)}
			</p>
		</header>
	);
};

export default Header;
