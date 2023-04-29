import actionTypes from './actionTypes';

export const getPostRequest = () => ({
    type: actionTypes.GET_POST_REQUEST
})

export const getPostSuccess = (data) => ({
    type: actionTypes.GET_POST_SUCCESS,
    data
})

export const getPostFailure = () => ({
    type: actionTypes.GET_POST_FAILURE
})

export const createPostSuccess = (post) => ({
    type: actionTypes.CREATE_POST_SUCCESS,
    post
});

export const createPostRequest = () => ({
    type: actionTypes.CREATE_POST_REQUEST
});

export const createPostFailure = () => ({
    type: actionTypes.CREATE_POST_FAILURE
});

export const updatePostSuccess = (post) => ({
    type: actionTypes.UPDATE_POST_SUCCESS,
    post
})


export const deletePostSuccess = (_id) => ({
    type: actionTypes.DELETE_POST_SUCCESS,
    _id
})