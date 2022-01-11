import React, {useEffect, useState} from 'react'

import s from './cart.module.css'
import {getCartProductsArrayFromCookie} from "../../utils/cart-manager";
import {useDispatch, useSelector} from "react-redux";
import ProductTile from "../product-tile-component/ProductTile";

const ShoppingCart = props => {
    const totalPrice = useSelector(store => store.cartState.totalPrice)
    const dispatch = useDispatch()
    const [productsArray, updateProductsArray] = useState([])

    useEffect(() => {
        updateProductsArray(getCartProductsArrayFromCookie())
    }, [totalPrice])


    const productsListMapper = () => {
        return productsArray.map(productData => <ProductTile cart={true} productData={productData}/> )
    }

    return (
        <section className={s.wrapper}>
            <div className={s.products_list}>
                {productsListMapper()}
                <u>Total: {totalPrice} $</u>
            </div>
            <div className={s.request_form}>

            </div>
        </section>
    )
}

export default ShoppingCart