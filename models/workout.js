// Requeing mongoose and the shcema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      required: "Please enter an exercise type."
    },
    name: {
      type: String,
      require: "Please enter the name of the exercise."
    },
    duration: {
      type: Number,
      required: "Please enter duration of the exercise."
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
},
{
  toJSON: {
    virtuals: true
  }
});

// 
workoutSchema.virtual("totalDuration").get( function() {
return this.exercises.reduce( (total, excercise) => {
return total + excercise.duration
}, 0)
})


// This created the  model with this schema
const workout = mongoose.model("workout", workoutSchema);

// Exporting the workout model
module.exports = workout;
