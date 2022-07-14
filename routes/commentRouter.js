const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

// insert post router
router.post("/addComment", commentController.addComment)

// get all post router
router.get("/getAllComment", commentController.getAllComment)

// update post router
router.put("/:id", commentController.updateComment)

// delete post router
router.delete("/:id", commentController.deleteComment)

// get single post router
router.get("/:id", commentController.getOneComment)

module.exports = router
