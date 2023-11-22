const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

const cors = require("cors");

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
    res.send("API is working properly");
	// res.sendFile(
	// 	!req.params.page
	// 		? __dirname + "/pages/index.html"
	// 		: fs.existsSync(__dirname + "/pages/" + req.params.page + ".html")
	// 		? __dirname + "/pages/" + req.params.page + ".html"
	// 		: __dirname + "/pages/404.html"
	// );
});
