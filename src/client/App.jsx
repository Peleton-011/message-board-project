import { useState, useEffect } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import "./App.css";

import Chatlog from "./components/Chatlog";
import NewMessage from "./components/NewMessage";

function App() {
	const [msgList, setMsgList] = useState([]);
	useEffect(callAPI, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div>
					<Chatlog msgList={msgList} />
					<Link to="new">New</Link>
				</div>
			),
		},
		{
			path: "new",
			element: (
				<div>
					<NewMessage />
					<Link to="/">Back</Link>
				</div>
			),
		},
	]);

	function callAPI() {
		fetch("http://localhost:9000")
			// .then((res) => res.text())
            .then((res => res.json()))
			.then((res) => setMsgList(res.data))
            .then((res) => console.log(msgList));
	}

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
