const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

router.get("/getAllPost", postController.getAllPost);

router.post("/addPost", postController.addPost);

router.put("/:id", postController.updatePost);

module.exports = router;