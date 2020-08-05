const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const trainingsRoutes = require("./routes/trainings");
const exercisesRoutes = require("./routes/exercises");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/trainings", trainingsRoutes);
app.use("/exercises", exercisesRoutes);

app.listen(5000, () => {
    console.log("Listening on 5000");
});
