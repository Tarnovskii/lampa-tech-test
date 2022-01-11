import {addProductToCart, getTotalProductsPrice, removeProductFromCart} from "../../utils/cart-manager";

export const pushProductToCart = product => {
    addProductToCart(product)
    return {type: '[CART] PUSH_PRODUCT_TO_CART', value: product.id}
}

export const popProductFromCart = id => {
    removeProductFromCart(id)
    return {type: '[CART] POP_PRODUCT_FROM_CART', value: id}
}

export const initCartFromCookies = () => {
    return {type: '[CART] INIT_CART_TOTAL_PRICE_FROM_COOKIES', value: getTotalProductsPrice()}
}