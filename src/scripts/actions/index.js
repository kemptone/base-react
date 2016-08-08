import fetch from 'isomorphic-fetch'

export const REQUEST_FROM_API = 'REQUEST_FROM_API'
export const RECEIVE_FROM_API = 'RECEIVE_FROM_API'
export const BASE_URL = "https://13sdfasdf.com/"

// should set spinner
export function requestFromAPI(state) {
    return {
        REQUEST_FROM_API
        , state
    }
}

export function fetchUser(state) {
    return dispatch => {
        dispatch(requestFromAPI(state))
        return fetch( BASE_URL + "user" )
            .then(response => response.json())
            .then(json => {
                return {
                    type: RECEIVE_FROM_API
                    , state
                    , user: json.data
                    , receivedAt: Date.now()
                }
            })
    }
}