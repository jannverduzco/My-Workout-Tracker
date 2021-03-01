// Dependencies
const path = require("path");
 
// exporting routes
module.exports = (app) => {
    // GET route to render the root of the app
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
     // GET route to render excerise.html
     app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
      // GET route to render stats.html
      app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};
