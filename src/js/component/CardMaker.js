import React from "react";

import PropTypes from "prop-types";

export const CardMaker = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.href} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
CardMaker.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
	href: PropTypes.string,
	buttonLabel: PropTypes.string
};
