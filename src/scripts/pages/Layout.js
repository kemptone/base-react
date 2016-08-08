import React from 'react'
import { IndexLink, Link } from "react-router"

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <IndexLink to="/">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="featured">Featured</Link>
                    </li>
                </ul>

                <h1>Layout</h1>
                {this.props.children}
            </div>
        )
    }
}
