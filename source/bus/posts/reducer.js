// Core
import { FILL_POSTS } from './types.js';

// Instruments
import { fromJS, List } from 'immutable';

const initialState = List();
console.log(initialState);
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload)
        default:
            return state
    }
}