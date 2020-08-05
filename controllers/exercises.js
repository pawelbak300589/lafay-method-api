const Exercise = require("../models/exercise");

exports.getExercises = (req, res) => {
    Exercise.find()
        .then((exercises) => {
            res.send(exercises);
        })
        .catch((err) => console.log(err));
};

exports.getExercise = (req, res) => {
    const exerciseId = req.params.id;
    Exercise.findById(exerciseId)
        .then((exercise) => {
            res.send(exercise);
        })
        .catch((err) => console.log(err));
};

exports.postAddExercise = (req, res) => {
    const {  } = req.body;
    // TODO: add exercise logic
};

exports.postEditExercise = (req, res) => {
    const exerciseId = req.params.id;
    // TODO: edit exercise logic
};

exports.postDeleteExercise = (req, res) => {
    const exerciseId = req.params.id;
    // TODO: delete exercise logic
};
