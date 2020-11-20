// Core
import { createStore } from "redux";

// Reducers
import { rootReducer } from "./rootReducer";

// Enhancer
import { enhancerStore } from "./middleware/core";

export const store = createStore(rootReducer, enhancerStore);
