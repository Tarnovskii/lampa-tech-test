import React from 'react'

import s from './product.module.css'
import {useDispatch} from "react-redux";
import {popProductFromCart, pushProductToCart} from "../../store/action-creators/cart-actions";

const ProductTile = props => {
    const dispatch = useDispatch()

    const pushToCart = () => dispatch(pushProductToCart((({id, thumbnailUrl, title}) => ({
        id,
        thumbnailUrl,
        title
    }))(props.productData)))

    const popFromCart = () => dispatch(popProductFromCart(props.productData.id))

    return (
        <div key={props.productData.id} className={`${s.wrapper} ${props.cart && s.in_cart}`}>
            <img src={props.productData.url || props.productData.thumbnailUrl} alt={'product_preview'}/>
            <div className={`${s.details} ${props.cart && s.in_cart}`}>
                <p>{props.productData.title} ({props.cart && props.productData.id}$)</p>
                <button className={`${props.cart && s.disabled}`} onClick={pushToCart}>Добавить в корзину ({props.productData.id}$)</button>
                <div className={`${props.cart ? s.cart_buttons : s.disabled}`}>
                    <button onClick={pushToCart}>+</button>
                    <b>{props.productData.count}</b>
                    <button onClick={popFromCart}>-</button>
                </div>
            </div>
        </div>
    )
}

export default ProductTile