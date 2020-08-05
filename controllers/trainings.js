const Training = require("../models/training");

exports.getTrainings = (req, res) => {
    Training.find()
        .then((trainings) => {
            res.send(trainings);
        })
        .catch((err) => console.log(err));
};

exports.getTraining = (req, res) => {
    const trainingId = req.params.id;
    Training.findById(trainingId)
        .then((training) => {
            res.send(training);
        })
        .catch((err) => console.log(err));
};

exports.postAddTraining = (req, res) => {
    const { name, exercises, notes, userId } = req.body;

    Training.findById(trainingId)
        .then((training) => {
            training.name = name;
            training.exercises = exercises; // TODO: JSON.parse() etc.
            training.notes = notes; // TODO: JSON.parse() etc.
            training.user = userId;
            training.modified = Date.now();

            return training.save();
        })
        .then((training) => {
            res.send(training);
        })
        .catch((err) => console.log(err));
};

exports.postEditTraining = (req, res) => {
    const trainingId = req.params.id;
    // TODO: edit training logic
};

exports.postDeleteTraining = (req, res) => {
    const trainingId = req.params.id;
    // TODO: delete training logic
};
