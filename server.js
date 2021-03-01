// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Setting up Express App and middleware
const app = express();
app.use(morgan("dev"));

// Port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Setting up mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Passing instance of espress through routes
require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);

// Settign up Port
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
  