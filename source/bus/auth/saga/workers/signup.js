// Core
import { put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

// Instruments
import { api } from "../../../../REST";
import { authActions } from "../../actions";

export function* signup({ payload: userData }) {
    const result = api.posts.fakeFetchTypePost(userData);
    yield delay(200);
    yield put(authActions.authenticate(result))
}