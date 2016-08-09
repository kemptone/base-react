export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      first_name: "Will",
      age: 35,
    }
  }
}

export function fetchUser() {
    return {
        type: "FETCH_USER"

        // to simulate the middleware to handle promise responses
        // from ajax calls, actual code would be something like
        // payload : request('http://asdfasdf.sdfdsf.com/user')
        , payload : new Promise((resolve, rejected) =>
            setTimeout(()=> {
                // rejected(Error("Fard Broke it"))
                resolve({
                    uid: 234251234
                    , first_name: "Lord"
                    , last_name: "Fairfax"
                    , age: String(Math.random()).substr(2, 2)
                    , fetching: false
                    , fetched: true
                    , error: null
                })
            }, 1000)
        )
    }
}

export function setUserName(first_name) {
  return {
    type: 'SET_USER_NAME',
    payload: { first_name : first_name },
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: { age },
  }
}
