import React from 'react'
import { IndexLink, Link } from "react-router"
import { connect } from "react-redux"
import * as user from "../actions"


@connect((store) => {
  return {
    user: store.user
  }
})

export default class Layout extends React.Component {

    componentWillMount() {
        // this.props.dispatch(user.setUserName("FRED" + Math.random()))
    }

    render() {

        const user = this.props.user

        return (
            <div>
                <h1>{user.first_name}</h1>
                <h2>{user.last_name}</h2>
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
