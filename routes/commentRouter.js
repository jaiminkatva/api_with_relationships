const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.post("/addComment", commentController.addComment)

router.get("/getAllComment", commentController.getAllComment)

router.put("/:id", commentController.updateComment)

router.delete("/:id", commentController.deleteComment)

router.get("/:id", commentController.getOneComment)

router.get("/getLikeComment", commentController.getLikeComments)

module.exports = router