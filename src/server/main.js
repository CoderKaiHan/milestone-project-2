import express from "express"
import cors from 'cors'
import ViteExpress from "vite-express"
import connectDB from "./config/database.js"
import authController from "./controllers/auth_controller.js"
import itineraryController from "./controllers/itinerary_controller.js"


const app = express()

app.use(cors({ origin: "https://escapeplan.onrender.com" }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()




app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.use("/itinerary", itineraryController)
app.use(authController)


const PORT = process.env.PORT || 3000;
ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
})
// Render will supply the PORT env
