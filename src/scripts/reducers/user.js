export default function reducer(
    state = {
        uid: null
        , first_name: "Justin"
        , last_name: "Kempton"
        , age: 35
        , fetching: false
        , fetched: false
        , error: null
    }
    , action
) {

    switch (action.type) {
        case "FETCH_USER_PENDING": {
            return {
                ...state
                , fetching: true
            }
        }
        case "FETCH_USER_REJECTED": {
            return {
                ...state
                , fetching: false
                , error: action.payload
            }
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                ...action.payload
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state
                , first_name: action.payload.first_name
            }
        }
        case "SET_USER_AGE": {
            return {
                ...state
                , age: action.payload.age
            }
        }
    }

    return state
}
