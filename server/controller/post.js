const Post = require('../model/post.js')

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            posts
        })
    } catch (e) {
        res.status(500).json({
            error: e
        })
    }
}

const createPost = async (req, res) => {
    try {

        if (Object.keys(req.body).length === 0) {
            return res.status(200).json({
                message: "Missing input"
            })
        }
        const post = await Post.create(req.body)
        return res.status(200).json({
            message: "create success",
            post
        })
    } catch (e) {
        res.status(500).json({
            error: e
        })
    }
}

const updatePost = async (req, res) => {
    try {
        console.log(req.body);
        const { _id, ...other } = req.body;
        if (!_id || Object.keys(other).length == 0) {
            return res.status(200).json({
                message: "Missing input"
            })
        }
        const response = await Post.findByIdAndUpdate(_id, other, { new: true })
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? `update success` : 'update failed',
            post: response ? response : {}
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const { _id } = req.body
        if (!_id) {
            return res.status(200).json({
                message: "Missing input"
            })
        }
        const response = await Post.findByIdAndDelete(_id)
        return res.status(200).json({
            success: response ? true : false,
            mes: response ? `delete success` : 'No post delete',
            post: response
        })
    } catch (e) {
        res.status(500).json({
            error: e
        })
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}