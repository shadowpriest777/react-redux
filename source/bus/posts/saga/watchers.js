// Core
import { takeEvery, all, call } from 'redux-saga/effects'

// Types
import { types } from '../types'

// Workers
import { createPost, fetchPosts } from './workers'

function* watchCreatePost() {
    yield takeEvery(types.CREATE_POSTS_ASYNC, createPost)
}

export function* watchPosts() {
    yield all([call(watchCreatePost), call(fetchPosts)])
}