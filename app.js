import express from "express";
const app = express();
const port = 5500;

app.use(express.static("public"));

app.post("/contactSubmit", (req, res) => {
  console.log("Form Submitted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
