import React from "react";

const NewMessage = ({onSubmit}) => {
	return (
		<form onSubmit={onSubmit}>
			<input id="name" type="text" name="text" />
			<input id="message" type="text" name="user" />
			<input type="submit" />
		</form>
	);
};

export default NewMessage;
