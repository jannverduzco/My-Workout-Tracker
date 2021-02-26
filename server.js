// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3000;

// Setting up Express App and middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Passing instance of espress through routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Setting up mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Settign up Port
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
  