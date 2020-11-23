import { types} from './types.js'
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: types.FILL_POSTS,
        payload: posts
    }
}

export const addNewPost = (post) => {
    return {
        type: types.ADD_NEW_POST,
        payload: post
    }
}

export const fetchPostsAsync = () => {
    return {
        type: types.FETCH_POSTS_ASYNC
    }
}

export const createPostAsync = (comment) => {
    return {
        type: types.CREATE_POSTS_ASYNC,
        payload: comment
    }
}