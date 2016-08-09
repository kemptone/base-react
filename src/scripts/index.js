import React from 'react'
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux"

import store from "./store"

import Layout from './pages/Layout'
import Settings from './pages/Settings'
import Featured from './pages/Featured'

var e_mount = document.getElementById("mount")

// <Route path="archives(/:article)" name="archives" component={Archives}></Route>

store.subscribe(()=> {
    console.log(store.getState())
})

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Featured}></IndexRoute>
                <Route path="featured" name="featured" component={Featured}></Route>
                <Route path="settings" name="settings" component={Settings}></Route>
            </Route>
        </Router>
    </Provider>
    , e_mount
)
