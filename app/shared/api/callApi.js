import { SPINNER_START, SPINNER_STOP, REJECTED, FULFILLED, PENDING } from '../actionTypes'
import fetch from 'isomorphic-fetch'

export default (settings) => (dispatch) => {

    // TODO: need code for bearer tolken to go in header
    dispatch({ type : settings.type + PENDING })
    dispatch({ type : SPINNER_START })

    return fetch(settings.url)
        .then( response => response.json())
        .then( json => {

            dispatch({
                type : settings.type + FULFILLED
                , payload : json
            })

            dispatch({ type : SPINNER_STOP })

        })
}
