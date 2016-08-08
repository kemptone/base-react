export const user = (state, action) => {
    switch (action.type) {
        case "MODIFY_USER":
            return {
                ...state,
                completed: false
            }
        default:
            return state
    }
}
