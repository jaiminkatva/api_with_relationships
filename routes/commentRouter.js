const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

// insert comment router
router.post("/addComment", commentController.addComment)

// get all comment router
router.get("/getAllComment", commentController.getAllComment)

// update comment router
router.put("/:id", commentController.updateComment)

// delete comment router
router.delete("/:id", commentController.deleteComment)

// get single comment router
router.get("/:id", commentController.getOneComment)

module.exports = router
