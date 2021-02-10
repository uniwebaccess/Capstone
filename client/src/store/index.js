import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import data from "./data";
import status from "./status";
import error from "./error";

const reducer = combineReducers({
  data,
  status,
  error,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: (getState, action) => process.env.NODE_ENV === "development",
    })
  )
);
const store = createStore(reducer, middleware);
export default store;
