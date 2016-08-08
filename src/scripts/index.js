import React from 'react'
import { render } from "react-dom";
import Layout from './pages/Layout'

document.addEventListener('DOMContentLoaded', function() {
    var e_mount = document.getElementById("mount")
    render( <Layout />, e_mount )
})