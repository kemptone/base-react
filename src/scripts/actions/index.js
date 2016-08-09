export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      first_name: "Will",
      age: 35,
    }
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
