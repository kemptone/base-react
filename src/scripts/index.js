import React from 'react'
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import { Provider } from "react-redux"
import store from "./store"

import Layout from './containers/Layout'
import Featured from './pages/Featured'
import Settings from './pages/Settings'

// <Route path="archives(/:article)" name="archives" component={Archives}></Route>

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Featured}></IndexRoute>
                <Route path="featured" name="featured" component={Featured}></Route>
                <Route path="settings" name="settings" component={Settings}></Route>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("mount")
)
