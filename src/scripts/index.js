import React from 'react'
import { render } from "react-dom";
import Layout from './pages/Layout'
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Settings from './pages/Settings'
import Featured from './pages/Featured'

document.addEventListener('DOMContentLoaded', function() {
    var e_mount = document.getElementById("mount")

    // <Route path="archives(/:article)" name="archives" component={Archives}></Route>

    render(
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Featured}></IndexRoute>
                <Route path="featured" name="featured" component={Featured}></Route>
                <Route path="settings" name="settings" component={Settings}></Route>
            </Route>
        </Router>
        , e_mount
    )
})