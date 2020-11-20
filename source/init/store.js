// Core
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

// Reducers
import { rootReducer } from "./rootReducer";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title:      ()=>'#139BFE',
        prevState:  ()=>'#1C5FAF',
        action:     ()=>'#149945',
        nextState:  ()=>'#A47104',
        error:      ()=>'#ff0005',
    }
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = __DEV__ && devtools ? devtools : compose;

const middleware = [thunk];

if (__DEV__) {
    middleware.push(logger);
}

const enhancerStore = composeEnhancer(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancerStore);
