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
	const [msgList, setMsgList] = useState(0);
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
			.then((res) => res.text())
			.then((res) => setMsgList(res));
	}

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
