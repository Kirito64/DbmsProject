const express = require("express");
const app = express();
const db = require("./configs/db");
const cors = require("cors");
const bodyParser = require("body-parser");

db.sequelize.sync({ force: true });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const FeedbackRoutes = require("./Routes/feedbackrest");
const AdmissionRoutes = require("./Routes/admissionrest");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/feedback", FeedbackRoutes);
app.use("/api/admission", AdmissionRoutes);
app.listen(8000, () => {
  console.log("Service started on port 8000");
});
