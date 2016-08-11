import { SPINNER_START, SPINNER_STOP, REJECTED, FULFILLED, PENDING } from '../actionTypes'
import fetch from 'isomorphic-fetch'
import config from '../../config/'

const Bearer = `Bearer: eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJwYXlsb2FkIjoie1wiX3R5cGVcIjpcInNlc3Npb25cIixcImlkXCI6XCI2cUZ1RHZYNVE0Q1FQYVZqM2xOZzZBXCIsXCJfY291bnRlclwiOjAsXCJ2ZXJzaW9uX2lkXCI6MSxcInVzZXJfaWRcIjpcIjNrOW5DQjhnUi1LR2NuOUNuSnJrT0FcIixcImlzX3ZlcmlmaWVkX3VzZXJcIjp0cnVlfSIsImV4cCI6MTQ3MTU0ODY4Mn0.gfrD4j8irednHljJeCoKrzFQj3uT-k3mVnEHLzsGggg`

export default (settings) => (dispatch) => {

    settings.Headers = settings.Headers || {
        Authorization : Bearer
    }

    // TODO: need code for bearer tolken to go in header
    dispatch({ type : settings.type + PENDING })
    dispatch({ type : SPINNER_START })

    return fetch(settings.url, settings)
        .then( response => response.json())
        .then( json => {

            setTimeout(function() {

                dispatch({
                    type : settings.type + FULFILLED
                    , payload : json
                })

            }, 1500)

            dispatch({ type : SPINNER_STOP })

        })
}

