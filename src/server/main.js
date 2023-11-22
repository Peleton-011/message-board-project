const express = require("express");
const ViteExpress = require("vite-express");
const { v4 : uuid } =require("uuid");

const app = express();

const cors = require("cors");

const msgList = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
		id: 3,
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
		id: 4,
	},
];

app.get("/hello", (req, res) => {
	res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 9000, () =>
	console.log("Server is listening on port 9000...")
);

// serve your css as static
app.use(express.static(__dirname + "/styles/"));

app.use(cors());

// app.get("/", function (req, res, next) {
// 	res.send("API is working properly");
// });

app.get("/", (req, res) => {
	//"/:page?"
	res.send({ data: msgList });
	// res.sendFile(
	// 	!req.params.page
	// 		? __dirname + "/pages/index.html"
	// 		: fs.existsSync(__dirname + "/pages/" + req.params.page + ".html")
	// 		? __dirname + "/pages/" + req.params.page + ".html"
	// 		: __dirname + "/pages/404.html"
	// );
});

app.get("/new", (req, res) => {
	//Get form data
	msgList.push({
		text: req.query.text,
		user: req.query.user,
		added: new Date(),
		id: uuid(),
	});
});
