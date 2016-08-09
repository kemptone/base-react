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

    fetchUser(e) {
        this.props.dispatch(user.fetchUser())
    }

    render() {

        const userProps = this.props.user

        let button

        if (userProps.pending)
            button = (<button>loading user...</button>)
        else
            button = (<button onClick={this.fetchUser.bind(this)}>load user</button>)

        return (
            <div>
                <h1>{userProps.first_name}</h1>
                <h2>{userProps.last_name}</h2>
                <h2>{userProps.age}</h2>

                {button}

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
