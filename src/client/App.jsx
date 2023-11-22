import { useState, useEffect } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import "./App.css";

function App() {
	const [apiResponse, setApiResponse] = useState(0);
	useEffect(callAPI, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div>
					<h1>Hello World</h1>
					<Link to="new">New</Link>
				</div>
			),
		},
		{
			path: "new",
			element: <div><h2>New!</h2> {apiResponse}</div>,
		},
	]);

	function callAPI() {
		fetch("http://localhost:9000")
			.then((res) => res.text())
			.then((res) => setApiResponse(res));
	}

	return (
		<div className="App">
			{apiResponse}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
