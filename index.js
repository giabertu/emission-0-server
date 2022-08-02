const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router.js");
const { mongoose } = require("./db");

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jean:nova@cluster0.bfgprwu.mongodb.net/?retryWrites=true&w=majority"
    );

    /*     await sequelize.sync(); */
    console.log("Database connection successful 🍏");
  } catch (error) {
    console.log("Database connection failed again🍎", error);
  }
})();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(
  process.env.PORT || 6000
); /* it'll still listen to port 5000 when you test locally, but it will also work on Heroku. Important note - PORT word must be capital. */
