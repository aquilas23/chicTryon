const express = require("express");
const cors = require("cors");
require("dotenv").config();
const StudioRouter = require("./Routes/StudioRoute");
const fs = require("fs");

const app = express();

app.use("/uploads", express.static("uploads"));

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

app.use(cors());
app.use(express.json());

app.use("/api", StudioRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
