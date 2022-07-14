const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

router.post("/addPost", postController.addPost);

router.get("/getAllPost", postController.getAllPost);

router.get("/:id", postController.getOnePost);

router.put("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

router.get("/oneTomany/:id", postController.oneTomany);

router.get("/getPublise", postController.getPublise);

module.exports = router;