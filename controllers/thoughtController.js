const User = require("../models/User");
const Thought = require("../models/Thought");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thoughts with that ID" });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }
      );
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const deleteThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!deleteThought) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID :(" });
      }
      res.json(deletedThought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    console.log("You are adding a reaction");
    console.log(req.body);
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reaction: req.params.reactionId } },
        { runValidators: true, new: true }
      );
      if (!reaction) {
        return res
          .status(404)
          .json({ message: "No thought found with that ID :(" });
      }
      res.json(reaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteReaction(req, res) {
    // Implement the logic to pull and remove a reaction by the reaction's reactionId value
  },
};

module.exports = thoughtController;
