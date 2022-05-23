const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");


dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("succesfully connted");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

