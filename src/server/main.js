import express from "express";
import ViteExpress from "vite-express";
import connectDB from "./config/database.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

import itineraryController from "./controllers/itinerary_controller.js"
app.use("/itinerary", itineraryController)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000."),
);
