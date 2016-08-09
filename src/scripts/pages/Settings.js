import React from 'react'
import { connect } from "react-redux"

@connect((store) => {
    return {
        user: store.user
    }
})

export default class Settings extends React.Component {

    render() {

        const arr = objectToArray(this.props.user)

        return (
            <div>
                <h1>Settings</h1>
            </div>
        )
    }
}
