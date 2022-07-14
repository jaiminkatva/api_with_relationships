const db = require("../models");
const Comment = db.comment;

// Add comment controller 
const addComment = async(req, res) => {
    let info = {
        contant: req.body.contant,
        like: req.body.like
    }
    const comment = await Comment.create(info)
    res.status(200).send(comment)
    console.log(comment);
}

// get all comments
const getAllComment = async(req, res) => {
    const comment = await Comment.findAll({})
    res.status(200).send(comment)
    console.log(comment);
}

// like comments only
const getLikeComments = async(req, res) => {
    const comment = await Comment.findAll({ where: { like: true } })
    res.status(200).send(comment)
}

// update comments 
const updateComment = async(req, res) => {
    let id = req.params.id
    const comment = await Comment.update(req.body, { where: { id: id } })
    res.status(200).send(comment);
}

// delete comments
const deleteComment = async(req, res) => {
    let id = req.params.id;
    await Comment.destroy({ where: { id: id } })
    res.status(200).send(`Comment Deleted Successfully id is ${id}`)
}

// get single comment
const getOneComment = async(req, res) => {
    let id = req.params.id;
    const comment = await Comment.findOne({ where: { id: id } })
    res.status(200).send(comment)
    console.log(comment)
}

module.exports = {
    addComment,
    getAllComment,
    updateComment,
    deleteComment,
    getOneComment,
    getLikeComments
}