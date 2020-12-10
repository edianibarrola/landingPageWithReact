import React from "react";

import PropTypes from "prop-types";

export const NavbarMaker = props => {
	return (
		<div className="pos-f-t">
			<div className="collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<h4 className="text-white">{props.title}</h4>
					<span className="text-muted">
						Toggleable via the navbar brand.
					</span>
				</div>
			</div>
			<nav className="navbar fixed-top navbar-dark bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
			</nav>
		</div>
	);
};
NavbarMaker.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
	href: PropTypes.string,
	buttonLabel: PropTypes.string
};
