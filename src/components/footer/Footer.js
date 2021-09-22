import React from "react";
import Button from "./button/Button";

import classes from "./Footer.module.css";

const Footer = () => {
	const linkedinButtonHandler = () => {};

	const githubButtonHandler = () => {};

	return (
		<footer className={classes.footer}>
			<a href="https://www.linkedin.com/in/pierre-dinelle/">
				<Button class="salmonButton" onClick={linkedinButtonHandler}>
					LINKED-IN
				</Button>
			</a>
			<a href="https://github.com/Peteami/NasaPicureOfTheDay">
				<Button class="goldButton" onClick={githubButtonHandler}>
					GITHUB CODE
				</Button>
			</a>
		</footer>
	);
};

export default Footer;
