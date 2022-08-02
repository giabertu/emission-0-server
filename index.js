const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router.js");
const { sequelize } = require("./db");

(async () => {
  try {
    /*     await mongoose.connect("mongodb://127.0.0.1:27017/emisssion0?"); */
    await sequelize.authenticate();
    console.log("Database connection successful 🍏");
  } catch (error) {
    console.log("Database connection failed 🍎", error);
  }
})();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(
  process.env.PORT || 5000
); /* it'll still listen to port 5000 when you test locally, but it will also work on Heroku. Important note - PORT word must be capital. */
