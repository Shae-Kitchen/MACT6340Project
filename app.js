import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMessage } from "./utils/utils.js";
import * as db from "./utils/database.js";
let projects = [];

dotenv.config();

const app = express();
const port = 5500;
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cors());
app.use(express.json()); //allows for message data to be passed around on the backend
app.use(express.static("public"));

app.get("/", async (req, res, next) => {
  await db
    .connect()
    .then(async () => {
      projects = await db.getAllProjects();
      console.log(projects);
      res.render("index.ejs");
    })
    .catch(next);
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs", { data: projects });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/contactSubmit", async (req, res) => {
  try {
    // Send the message using the utils.sendMessage function
    await sendMessage(req.body.sub, req.body.txt);

    // Send a success response if the message was successfully sent
    res.json({ result: "success" });
  } catch (err) {
    // Log the error and send a failure response if something goes wrong
    console.error("Error sending message:", err);
    res.status(500).json({ result: "failure", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
