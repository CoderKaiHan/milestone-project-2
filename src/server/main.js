import express from "express";
import ViteExpress from "vite-express";
import connectDB from "./config/database.js";

// connectDB()

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000."),
);
