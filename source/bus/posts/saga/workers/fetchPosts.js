// Core
import { put, apply } from 'redux-saga/effects'

// Instruments
import {api} from "../../../../REST";
import {fillPosts} from "../../actions";

export function* fetchPosts() {
    const response = yield apply(api, api.posts.fetch);
    const result =  yield apply(response, response.json);

    yield put(fillPosts(result))
}