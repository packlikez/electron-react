import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";

import answer from "./answer";
import question from "./question";
import apiMiddleware from "../middleware/api";

const reducer = {
  answer,
  question,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["apiMiddleware/CallBegin"], // hide error message for non-serialize payload
    },
  }),
  logger,
  apiMiddleware,
];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

declare module "react-redux" {
  export interface DefaultRootState extends RootState {}
}

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
