import { SPINNER_START, SPINNER_STOP } from '../actionTypes'
import fetch from 'isomorphic-fetch'

export default (settings) => (dispatch) => {

    // TODO: need code for bearer tolken to go in header

    dispatch({ type : settings.type + "_PENDING" })
    dispatch({ type : SPINNER_START })

    fetch(settings)
        .then( data => {

            dispatch({
                type : settings.type + "_FULFILLED"
                , payload : data
            })

            dispatch({ type : SPINNER_STOP })
        })
        .error( err => {

            dispatch({
                type : settings.type + "_REJECTED"
                , error : err
            })

            dispatch({ type : SPINNER_STOP })

        })

}
