import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = () => {

}
//


const makeStore = () => {
  const middleware = composeWithDevTools(
       applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
   )

   return createStore(reducer, middleware);
}
export default makeStore;
