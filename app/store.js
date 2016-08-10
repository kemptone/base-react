import { applyMiddleware, createStore } from "redux"
import reducer from "./consumer/example/reducers"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import logger from "redux-logger"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
