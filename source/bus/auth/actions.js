import { types } from './types.js'

export const authAction = {
    authenticate: () => {
        return {
            type: types.AUTHENTICATE
        };
    },
    signupAsync: (userData) => {
        return {
            type: types.SIGNUP_ASYNC,
            payload: userData,
        }
    }
}