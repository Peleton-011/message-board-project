import { useState, useEffect, useRef } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
	Link,
} from "react-router-dom";
import "./App.css";

import Chatlog from "./components/Chatlog";
import NewMessage from "./components/NewMessage";

function App() {
	const navigate = useNavigate();
	function useInterval(callback, delay) {
		const savedCallback = useRef();
		// Remember the latest callback.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}

	const onMsgSubmit = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
		console.log(e.target[1].value);
		fetch("http://localhost:9000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				text: e.target[0].value,
				user: e.target[1].value,
			}),
		})
			.then(() => {
				e.target[0].value = "";
				e.target[1].value = "";
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const [msgList, setMsgList] = useState([]);
	useEffect(callAPI, []);
	useInterval(callAPI, 5000);

	function callAPI() {
		fetch("http://localhost:9000")
			// .then((res) => res.text())
			.then((res) => res.json())
			.then((res) => setMsgList(res.data))
			.then((res) => console.log(msgList));
	}

	return (
		<div className="App">
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div>
							<h2>Chat</h2>
							<Chatlog msgList={msgList} />
							<Link to="/new">New Message</Link>
						</div>
					}
				/>

				<Route
					path="/new"
					element={
						<div>
							<h2>New Message</h2>
							<NewMessage onSubmit={onMsgSubmit} />
							<Link to="/">Back</Link>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
