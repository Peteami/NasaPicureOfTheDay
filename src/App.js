import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import ScrollTopArrow from "./components/scrollTopArrow/ScrollTopArrow";

import classes from "./App.module.css";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

function App() {
	const [picData, setPicData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showContactInfo, setShowContactInfo] = useState(false);

	const showContactHandler = () => {
		setShowContactInfo(true);
	};

	const hideContactHandler = () => {
		setShowContactInfo(false);
	};

	useEffect(() => {
		fetchapod();

		async function fetchapod() {
			const res = await fetch(nasaApiKey);
			const data = await res.json();
			setPicData(data);
			setIsLoading(false);
			console.log(data);
		}
	}, []);

	return (
		<div className={classes.app}>
			{showContactInfo && <Contact onClose={hideContactHandler} />}
			<Header onShowContact={showContactHandler} />
			{isLoading ? (
				<section className={classes.isLoading}>
					<p>Loading...</p>
				</section>
			) : (
				<div className={classes.mainPage}>
					<ScrollTopArrow />
					<Card picData={picData} />
				</div>
			)}
			<Footer />
		</div>
	);
}

export default App;
