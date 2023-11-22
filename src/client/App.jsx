import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [apiResponse, setApiResponse] = useState(0);
	useEffect(callAPI, []);

	function callAPI() {
		fetch("http://localhost:9000")
			.then((res) => res.text())
			.then((res) => setApiResponse(res));
	}

	return (
		<div className="App">
			{apiResponse}
		</div>
	);
}

export default App;
