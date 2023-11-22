import React from "react";

const Message = ({ text, user, added, id }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "10px",

			}}
		>
			<h2>{user}:</h2>
			<p>{text} <span style={{fontSize: "10px"}}>{new Date(added).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></p>
		</div>
	);
};

export default Message;
