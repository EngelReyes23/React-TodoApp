import React from "react";
import PropTypes from "prop-types";

const Small = React.memo(({ counter }) => {
	console.log("Render Small");

	return (
		<>
			<small>{counter}</small>
		</>
	);
});

Small.prototype = { counter: PropTypes.number.isRequired };

export default Small;
