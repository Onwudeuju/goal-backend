const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");
const goalScheme = new mongose.Schema({
  title: {
    type: String,
    require: true,
    // Please provide a title
  },
  description: String,
  progress: {
    type: Number,
    require: true,
    min: 0,
    max: 100,
  },
});
module.exports = mongoose.model("Goals", goalScheme);
