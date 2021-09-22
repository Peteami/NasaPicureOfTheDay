import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={classes.header}>
			{/* <img src="logo2.png" alt="logo" /> */}
			<h1>NASA Picture Of The Day</h1>
			<button className={classes.contactButton} onClick={props.onShowContact}>
				Get in touch
			</button>
		</header>
	);
};

export default Header;
