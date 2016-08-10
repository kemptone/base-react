import { applyMiddleware, createStore } from "redux"
import { combineReducers } from "redux"
import user from "./consumer/example/user.reducers"

const reducer = combineReducers({
    user
})

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import logger from "redux-logger"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
