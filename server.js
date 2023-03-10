require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./routes");

const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.json("Server started.");
});
app.use(router);

app.listen(PORT, (err) => {
	console.log("API server running at port 3001");
});
