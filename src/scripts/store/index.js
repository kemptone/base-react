import { createStore } from "redux"
import { user } from "../reducers/user"

export const tsky = createStore(user)
