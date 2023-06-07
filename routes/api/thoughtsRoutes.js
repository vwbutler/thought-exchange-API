const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET /api/thoughts
router.get("/", getAllThoughts);

// GET /api/thoughts/:thoughtId
router.get("/:thoughtId", getThoughtById);

// POST /api/thoughts
router.post("/", createThought);

// PUT /api/thoughts/:thoughtId
router.put("/:thoughtId", updateThought);

// DELETE /api/thoughts/:thoughtId
router.delete("/:thoughtId", deleteThought);

// POST /api/thoughts/:thoughtId/reactions
router.post("/:thoughtId/reactions", createReaction);

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.delete("/:thoughtId/reactions/:reactionId", deleteReaction);

module.exports = router;
