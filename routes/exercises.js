const express = require("express");

const router = express.Router();

const exercisesController = require("../controllers/exercises");

router.get("/", exercisesController.getExercises);

router.get("/", exercisesController.getTrainings);

router.get("/:id", exercisesController.getTraining);

router.post("/", exercisesController.postAddTraining);

router.post("/:id/edit", exercisesController.postEditTraining);

router.post("/:id/delete", exercisesController.postDeleteTraining);

module.exports = router;
