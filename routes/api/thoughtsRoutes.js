const express = require("express");
const router = express.Router();

// thoughts

router.get("/", (req, res) => {
  // Handle GET request for all thoughts
  // Retrieve thoughts from the database and send them as a response
});

// Export the router
module.exports = router;

const router = require("express").Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../../controllers/courseController.js");

// /api/courses
router.route("/").get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route("/:courseId")
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
