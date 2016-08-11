// for global spinners, each ajax call should also call these
export const SPINNER_START = "SPINNER_START"
export const SPINNER_STOP  = "SPINNER_STOP"

export const REJECTED       = "_REJECTED"
export const PENDING        = "_PENDING"
export const FULFILLED      = "_FULFILLED"


// each ajax call will need at least 3 states, which will be configured, and appended from a base NAME
// THING_{STATE} [ PENDING, REJECTED, FULFILLED ]
export const USER_FETCH     = "USER_FETCH"
