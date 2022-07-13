const db = require("../models");

const Post = db.post;

const addPost = async(req, res) => {
    const info = {
        title: req.body.title,
        body: req.body.body,
        publise: req.body.publise
    }

    const post = await Post.create(info)
    res.status(200).send(post)
    console.log(post)
}

const getAllPost = async(req, res) => {
    const post = await Post.findAll({})
    res.status(200).send(post);
}

const updatePost = async(req, res) => {
    id = req.params.id;
    const post = await Post.update(req.body, { where: { id: id } })
    res.status(200).send(post);

}

module.exports = {
    addPost,
    getAllPost,
    updatePost
}