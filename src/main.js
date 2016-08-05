console.log('Hello World!')
import React from 'react'
import ReactDOM from 'react-dom'
import Group from './Group'
import Counter from './Counter'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('header')
    )
    ReactDOM.render(
        React.createElement(Group),
        document.getElementById('mount')
    )
})