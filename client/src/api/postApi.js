import axios from 'axios'

const getPosts = () => {
    return axios.get(`http://localhost:5000/api/post`);
}

const createPost = (data) => {
    return axios.post(`http://localhost:5000/api/post`, data);
}

const updatePost = (data) => {
    return axios.put('http://localhost:5000/api/post', data);
}

const deletePost = (_id) => {
    return axios.delete('http://localhost:5000/api/post', {
        data: {
            _id
        }
    });
}

export {
    getPosts,
    createPost,
    updatePost,
    deletePost
}