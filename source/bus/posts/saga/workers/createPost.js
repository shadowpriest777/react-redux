// Core
import { put, apply } from 'redux-saga/effects'

// Instruments
import {api} from "../../../../REST";
import {addNewPost} from "../../actions";

export function* createPost({ payload: comment }) {
    const result = api.posts.fakeFetchTypePost(comment);
    yield put(addNewPost(result))
}