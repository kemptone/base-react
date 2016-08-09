export default function reducer(
    state = {
        uid: null
        , first_name: "Justin"
        , last_name: "Kempton"
        , age: 35
        , pending: false
        , error: null
    }
    , action
) {

    let type = action.type || ""

    if (type.endsWith("_PENDING"))
        return {
            ...state
            , pending: true
            , error : null
        }

    else if (type.endsWith("_REJECTED"))
        return {
            ...state
            , pending: false
            , error: action.payload
        }

    switch (type) {
        case "FETCH_USER_FULFILLED": {
            return {
                ...state
                , ...action.payload
                , pending: false
                , error : null
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
