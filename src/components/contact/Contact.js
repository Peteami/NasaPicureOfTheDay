import React from "react";
import Modal from "../UI/Modal";

import classes from "./Contact.module.css";

const Contact = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<div className={classes.contactInfo}>
				<span>
					<a href="mailto: dinellepierre@outlook.com">
						<img src="email.png" alt="email logo" />
						dinellepierre@outlook.com
					</a>
				</span>
				<span>
					<a href="https://www.linkedin.com/in/pierre-dinelle">
						<img src="linkedin.png" alt="linkedin logo" />
						https://www.linkedin.com/in/pierre-dinelle
					</a>
				</span>
				<span>
					<a href="https://github.com/Peteami?tab=repositories">
						<img src="github.png" alt="github logo" />
						https://github.com/Peteami?tab=repositories
					</a>
				</span>
			</div>

			<div className={classes.actions}>
				<button className={classes.closeButton} onClick={props.onClose}>
					Close
				</button>
			</div>
		</Modal>
	);
};

export default Contact;
