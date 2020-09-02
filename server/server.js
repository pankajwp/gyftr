const express = require("express");
const next = require("next");
const axios = require("axios");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require("fs");
const path = require("path");

app.prepare().then(() => {
	const server = express();
	server.use(express.json());

	// setting a wildcard route,
	// to handle each request made to server

	server.get("/api/get-catgories", async (req, res) => {
		console.log("server request");
		// let catData = fs.readFileSync(path.resolve(__dirname, "categories.json"));
		let { data } = await axios.get(
			"https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories"
		);
		// let reqData = JSON.parse(data.data);
		res.status(200).send(data);
	});

	server.get("*", (req, res) => handle(req, res));

	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`Running on port ${port}`);
	});
});
