const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

// insert post router
router.post("/addPost", postController.addPost);

// get all post router
router.get("/getAllPost", postController.getAllPost);

// get single post router
router.get("/:id", postController.getOnePost);

// update post router
router.put("/:id", postController.updatePost);

// delete post router
router.delete("/:id", postController.deletePost);

// one post many comments router
router.get("/oneTomany/:id", postController.oneTomany);

router.get("/getPublise", postController.getPublise);

module.exports = router;
