export const productsState = (state = {}, action) => {
    switch (action.type) {
        case '[PRODUCTS] FETCHING_STARTED':
            return {...state, isFetching: true}
        case '[PRODUCTS] FETCHING_FAILED':
            return {...state, isFetching: false, error: action.value}
        case '[PRODUCTS] FETCHING_SUCCESS':
            return {...state, isFetching: false, productsList: action.value}
        default: return state
    }
}