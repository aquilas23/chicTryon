const express = require("express");
const cors = require("cors");
require("dotenv").config();
const StudioRouter = require("./Routes/StudioRoute");
const { connectDB } = require("./Controllers/MongooseController");
const fs = require("fs");
connectDB();

const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads"));

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

app.use(cors({ origin: "*" })); // or specific domain

app.use(express.json());

app.use("/api", StudioRouter);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
