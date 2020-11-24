// Core
import { put } from 'redux-saga/effects'

// Instruments
import { api } from "../../../../REST";
import { authActions } from "../../actions";

export function* signup({ payload: userData }) {
    const result = api.auth.signup(userData);
    yield put(authActions.authenticate(result))
}