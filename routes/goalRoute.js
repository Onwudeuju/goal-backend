const express = require("express");
const {
  newGoal,
  getAllGoals,
  onGoingGoals,
  completeGoals,
  deleteGoal,
  eachGoal,
  updateProgress,
} = require("../controller/gaolControllers");
const router = express.Router();
// Create a route for addNewGoal
router.post("/", newGoal);
// Create a route for getAllGoals
router.get("/all", getAllGoals);
// Create a Route for OngoingGoals
router.get("/ongoing", onGoingGoals);
// Create a new route for completedGoals
router.get("/completed", completeGoals);
// Create a route for getEachGoal......... anytime you are getting with id it should be dynamic
router.get("/:id", eachGoal);
// create a route for updatedProgress
router.patch("/:id/progress", updateProgress);
// create a route
router.delete("/:id/delete", deleteGoal);

module.exports = router;
// https://goal-backend-v8uh.onrender.com
