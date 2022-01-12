export const cartState = (state = {}, action) =>{
    switch (action.type) {
        case '[CART] PUSH_PRODUCT_TO_CART':
            return {...state, totalPrice: state.totalPrice + action.value}
        case '[CART] POP_PRODUCT_FROM_CART':
            return {...state, totalPrice: state.totalPrice - action.value}
        case '[CART] INIT_CART_TOTAL_PRICE_FROM_COOKIES':
            return {...state, totalPrice: action.value}
        case '[CART] RESET_TOTAL_PRICE':
            return {...state, totalPrice: 0}
        default: return state
    }
}