const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footprintSchema = new Schema({
  footprint: Number,
});

const Footprint = mongoose.model("Footprint", footprintSchema);
module.exports = { mongoose, Footprint };
/* const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Footprints = sequelize.define("Footprints", {
  footprint: {
    type: Sequelize.DataTypes.STRING,
  },
});

/*TESTING COMMIT */

/* module.exports = { sequelize, Sequelize, Footprints }; */
