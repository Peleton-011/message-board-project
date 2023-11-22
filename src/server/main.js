const express = require("express");
const ViteExpress = require("vite-express");
const { v4: uuid } = require("uuid");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");
const port = 9000;

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

// serve your css as static
app.use(express.static(__dirname + "/styles/"));

//Use cors to allow cross origin resource sharing
app.use(cors());

app.use(bodyParser.json());


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

app.post("/", (req, res) => {
	const data = req.body;
	//Get form data
	msgList.push({
		text: data.text,
		user: data.user,
		added: new Date(),
		id: uuid(),
	});
	res.send("Data recieved successfully");
});

ViteExpress.listen(app, port, () =>
	console.log("Server is listening on port " + port + "...")
);