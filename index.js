const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const trainings = {};

app.get("/trainings", (req, res) => {
  res.send(trainings);
});

app.post("/trainings", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, exercises } = req.body;

  trainings[id] = {
    id,
    title,
    exercises,
  };

  res.status(201).send(trainings[id]);
});

const exercises = {};

app.get("/exercises", (req, res) => {
  res.send(exercises);
});

app.post("/exercises", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, type } = req.body;

  exercises[id] = {
    id,
    title,
    exercises,
  };

  res.status(201).send(exercises[id]);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
