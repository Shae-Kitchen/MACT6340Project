import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5500;

app.use(express.json());
app.use(express.static("public"));

app.post("/contactSubmit", (req, res) => {
  console.log("Form Submitted");
});

app.listen(port, () => {
  console.log(process.env.SENSITIVE_INFO);
  console.log(`Example app listening on port ${port}`);
});
