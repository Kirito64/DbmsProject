const router = require("express").Router();
const db = require("../configs/db").sequelize;

router.get("/getAll", async (req, res) => {
  const feedbacks = await db.models.Feedback.findAll();

  res.send(feedbacks);
});

router.post("/new", async (req, res) => {
  const feedback = req.body.body;
  console.log(req.body.body);
  const newFeedback = db.models.Feedback.build(feedback);
  await newFeedback.save();
  console.log(newFeedback.toJSON());
  res.json({ message: req.body }).send();
});

router.get("getByid/:id", async (req, res) => {
  const feedback = await db.models.Feedback.findById(req.params.id);

  res.send(feedback);
});

module.exports = router;
