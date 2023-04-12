const connectDB = require("./src/configs/db.config");
const express = require("express");

const app = express();
const PORT = 3001;

//connect to databse
connectDB();

//register middleware
app.use(express.json);
app.use(express.urlencoded);

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
