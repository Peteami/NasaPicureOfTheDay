import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import classes from "./ScrollTopArrow.module.css";

function ScrollTopArrow() {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<div className={classes.scrollTopArrow}>
			<FaArrowCircleUp
				className={classes.scrollTop}
				onClick={scrollTop}
				style={{ height: 80, display: showScroll ? "flex" : "none" }}
			/>
		</div>
	);
}

export default ScrollTopArrow;
