const express = require("express");

const router = express.Router();

const trainingsController = require("../controllers/trainings");

router.get("/", trainingsController.getTrainings);

router.get("/:id", trainingsController.getTraining);

router.post("/", trainingsController.postAddTraining);

router.post("/:id/edit", trainingsController.postEditTraining);

router.post("/:id/delete", trainingsController.postDeleteTraining);

module.exports = router;
