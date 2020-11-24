// Core
import { types } from './types.js';

// Instruments
import { Map } from 'immutable';

const initialState = Map({
    isAuthenticated: false
});

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return state.set('isAuthenticated', true)
        default:
            return state
    }
}