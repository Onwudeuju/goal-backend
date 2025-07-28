const goalsModal = require("../models/Goal");
// Controller for creating a new Goal this is Post Request
// post is your grtting from req.body
// put is to clear somethings and addind a new one while to patch is just to remove a world or alphabet
const newGoal = async (req, res) => {
  try {
    const { title, description, progress } = req.body;
    const goal = await goalsModel.create({ title, description, progress });
    res.status(201).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Controller to get all existing goals that has been created
const getAllGoals = async (req, res) => {
  try {
    const goals = await goalsModel.find();
    res.status(200).json(goals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Controller to get a single Goal by Id..........Id are specifically saved in params
// request and response
const eachGoal = async (req, res) => {
  try {
    const goal = await goalsModel.findById(req.params.id);
    if (!goal) {
      return res.status(400).json({ message: "Goal not Found" });
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Controller to get "AllonGoingGoal" the condition is progress has to be less than 100............"lt" means less tahn
const onGoingGoals = async (req, res) => {
  try {
    const goals = await goalsModel.find({ progress: { $lt: 100 } });
    console.log("Ongoing goals retrieved", goals);
    res.status(200).json(goals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Controller to get all completed Goals the condition is progess has to be strictly equal "===" to 100
const completeGoals = async (req, res) => {
  try {
    const goals = await goalsModel.find({ progress: 100 });
    console.log("Completed goals retrieved:", goals);
    res.status(200).json(goals);
  } catch (err) {
    res.satus(400).json({ error: err.message });
  }
};
// Controller to udpdate/patch progess of a Goal
const updateProgress = async (req, res) => {
  try {
    const { progress } = req.body;
    // Ensure progress provides
    if (progress === undefined) {
      return res.status(400).json({ error: "Progrss Value is required" });
    }
    const progressUpdate = await goalsModel.findByIdAndUpdate(
      req.params.id,
      { progress },
      { new: true }
    );
    // if the goal doesnt exist return 404
    if (!progressUpdate) {
      return res.status(404).json({ error: "Goal not Found" });
    }
    res.status(200).json(progressUpdate);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
// controller for deleting goal by Id
const deleteGoal = async (req, res) => {
  try {
    const deletedGoal = await goalsModel.findByIdAndDelete(req.params.id);
    if (!deletedGoal) {
      return res.status(404).json({ error: "Goal not Found" });
    }
    res.status(200).json({ message: "Goal deleted sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  newGoal,
  getAllGoals,
  eachGoal,
  onGoingGoals,
  completeGoals,
  updateProgress,
  deleteGoal,
};
