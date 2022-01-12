import React, {useEffect, useState} from 'react'

import s from './header.module.css'
import {Link} from "react-router-dom";
import {initCartFromCookies} from "../../store/actions/cart-actions";
import {useDispatch, useSelector} from "react-redux";


const Header = props => {
    const totalPrice = useSelector(store => store.cartState.totalPrice)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initCartFromCookies())
    }, [])

    return (
        <header className={s.wrapper}>
            <Link to={'/'} className={s.cart_button}>Главная</Link>
            <Link to={'/cart'} className={s.cart_button}>{!!totalPrice && `${totalPrice}$`} Cart</Link>
        </header>
    )
}

export default Header