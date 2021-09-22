import React, { useState } from "react";

import classes from "./Card.module.css";

const Card = (props) => {
	const [showLike, setShowLike] = useState(false);

	const likeSubmitHandler = () => {
		setShowLike(!showLike);
	};

	return (
		<div className={classes.card}>
			<div>
				<h1>{props.picData.title}</h1>
				{props.picData.copyright ? (
					<h5>Brought to you by {props.picData.copyright}</h5>
				) : (
					""
				)}
			</div>

			{props.picData.mediaType === "image" ? (
				<img src={props.picData.url} alt="Scene of the day" />
			) : (
				<iframe
					title="video"
					src={props.picData.url}
					frameBorder="0"
					gesture="media"
					allow="encrypted-media"
					allowFullScreen
				/>
			)}

			<div className={classes.cardBottom}>
				<p>{props.picData.explanation}</p>
				<h6>{props.picData.date}</h6>
				<hr />
				<div className={classes.like}>
					<button className={classes.likeButton} onClick={likeSubmitHandler}>
						{showLike ? "UnLike" : "Like"}
					</button>
					{showLike ? (
						<img
							className={classes.bump}
							src="likeBlack.png"
							alt="like icon black"
						/>
					) : (
						<img src="likeClear.png" alt="like icon clear" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
