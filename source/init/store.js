// Core
import { createStore } from "redux";

// Reducers
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Middleware
import { enhancerStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhancerStore);

sagaMiddleware.run(rootSaga);