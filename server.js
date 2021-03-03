// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Setting up Express App and middleware
const app = express();

// Port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

// Setting up mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workouttracker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Passing instance of espress through routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Settign up Port
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
