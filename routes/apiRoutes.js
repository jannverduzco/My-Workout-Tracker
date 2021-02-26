// Requiring dependecies (express and the file in our models folder)
const workouts = require("../models/workout.js");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    workouts
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    workouts
      .findByIdAndUpdate(
        req.params.id,
        {
          $push: { exercises: req.body },
        },
        { new: true, runValidators: true }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {});

  app.get("/api/workouts/range", (req, res) => {
    workouts
    // grabbing the last 7 docs in collection
    .find({}).limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
  });
};
