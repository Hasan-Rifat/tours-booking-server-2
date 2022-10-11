const mongoose = require("mongoose");

const dotenv = require("dotenv").config();

const app = require("./app");

// mongoose
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("database connected");
});
//server
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
