import React from "react";
import Message from "./Message";

const Chatlog = ({ msgList }) => {
    // msgList = [...msgList]
	console.log(msgList);
	return (
		<div>
			{msgList.map((msg) => 
					<Message
						text={msg.text}
						user={msg.user}
						added={msg.added}
						id={msg.id}
						key={msg.id}
					/>
				)
			}
		</div>
	);
};

export default Chatlog;
