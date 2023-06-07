const User = require("../models/User");
const Thought = require("../models/Thought");

const thoughtController = {
  getAllThoughts(req, res) {
    // Implement the logic to get all thoughts
  },
  getThoughtById(req, res) {
    // Implement the logic to get a thought by its _id
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateThought(req, res) {
    // Implement the logic to update a thought by its _id
  },
  deleteThought(req, res) {
    // Implement the logic to delete a thought by its _id
  },
  createReaction(req, res) {
    // Implement the logic to create a reaction stored in a single thought's reactions array field
  },
  deleteReaction(req, res) {
    // Implement the logic to pull and remove a reaction by the reaction's reactionId value
  },
};

module.exports = thoughtController;
