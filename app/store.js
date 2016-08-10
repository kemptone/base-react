import { applyMiddleware, createStore } from "redux"
import { combineReducers } from "redux"
import user from "./consumer/settings/settings.reducers"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import logger from "redux-logger"

const reducer = combineReducers({
    user
})

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
