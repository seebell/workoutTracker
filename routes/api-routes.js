const { Workout } = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", ({ body }, res) => {
        console.log("Get workout route is successful");
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
}