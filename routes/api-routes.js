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

    app.post("/api/workouts", ({ body }, res) => {
        console.log("Post is working");
        console.log({ body });
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

}