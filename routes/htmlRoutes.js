// Dependencies
const workout = require("./models/workout.js");
const path = require("path");
 
// exporting routes
module.exports = (app) => {
    // GET route to render the root of the app
    app.get("/", (req,res) => {
        res.sendFile(path.join(_dirname, "./public/index.html"));
    });
     // GET route to render excerise.html
     app.get("/", (req,res) => {
        res.sendFile(path.join(_dirname, "./public/exercise.html"));
    });
      // GET route to render stats.html
      app.get("/", (req,res) => {
        res.sendFile(path.join(_dirname, "./public/stats.html"));
    });
};
