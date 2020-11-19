import { FILL_POSTS, FETCH_POSTS_ASYNC } from './types.js'

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts
    }
}

export const fetchPhotosAsync = () => {
    return {
        type: FETCH_POSTS_ASYNC
    }
}