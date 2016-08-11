export default const actionTypes {

    // for global spinners, each ajax call should also call these
      SPINNER_START          : "SPINNER_START"
    , SPINNER_STOP           : "SPINNER_STOP"

    // each ajax call will need at least 3 states
    // naming convention, THING_{STATE}
    , USER_FETCH_PENDING     : "USER_FETCH_PENDING"
    , USER_FETCH_REJECTED    : "USER_FETCH_REJECTED"
    , USER_FETCH_FULFILLED   : "USER_FETCH_FULFILLED"


}