import { FILL_POSTS, ADD_NEW_POST, FETCH_POSTS_ASYNC, CREATE_POSTS_ASYNC } from './types.js'
const { v4 } = require('uuid');
import { api } from '../../REST';
import { now } from "moment";

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts
    }
}

export const addNewPost = (post) => {
    return {
        type: ADD_NEW_POST,
        payload: post
    }
}

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result))
}

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: CREATE_POSTS_ASYNC
    });

    const result = await api.posts.fakeFetchTypePost(comment);

    dispatch(addNewPost(result))
}