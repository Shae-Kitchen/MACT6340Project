import express from "express";
import dotenv from "dotenv";
import * as utils from "./utils/utils.js";

dotenv.config();

const app = express();
const port = 5500;

app.use(express.json()); //allows for message data to be passed around on the backend
app.use(express.static("public"));

app.post("/contactSubmit", async (req, res) => {
  await utils
    .sendMessage(req.body.sub, req.body.txt) //sends req. to utils.js for the info on the subject and text of message
    .then(() => {
      res.send({ result: "success" });
    })
    .catch(() => {
      res.send({ result: "failure" });
    });
});

app.listen(port, () => {
  console.log(process.env.SENSITIVE_INFO);
  console.log(`Example app listening on port ${port}`);
});
