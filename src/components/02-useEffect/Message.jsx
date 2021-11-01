import React, { useEffect } from "react";

const Message = () => {
	//
	useEffect(() => {
		// cuando se monta el componente
		console.log("Componente montado");

		// cuando se desmonta el componente
		return () => {
			console.log("Componente desmontado");
		};
	}, []);

	return (
		<div>
			<h3>Message</h3>
		</div>
	);
};

export default Message;
