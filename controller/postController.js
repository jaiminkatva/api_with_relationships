const db = require("../models");
const Post = db.post;
const Comment = db.comment;

// insert post controller
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

// get all post controller
const getAllPost = async(req, res) => {
    const post = await Post.findAll({})
    res.status(200).send(post);
}

// update post controller
const updatePost = async(req, res) => {
    id = req.params.id;
    const post = await Post.update(req.body, { where: { id: id } })
    res.status(200).send(post);
}

// delete post controller
const deletePost = async(req, res) => {
    id = req.params.id
    await Post.destroy({ where: { id: id } })
    res.status(200).send(`Post deleted successfully id is ${id}`)
}

// get single post controller
const getOnePost = async(req, res) => {
    id = req.params.id
    const post = await Post.findOne({ where: { id: id } })
    res.status(200).send(post)
}

// get one post to many comments controller
const oneTomany = async(req, res) => {

    let id = req.params.id;
    const data = await Post.findAll({
        include: [{
            model: Comment,
            as: 'comment'
        }],
        where: { id: id }
    })
    res.status(200).send(data)
}

module.exports = {
    addPost,
    getAllPost,
    updatePost,
    deletePost,
    getOnePost,
    oneTomany,
    getPublise
}
