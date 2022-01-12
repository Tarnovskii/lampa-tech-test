import React, {useEffect, useState} from 'react'

import s from './header.module.css'
import {Link} from "react-router-dom";
import {initCartFromCookies} from "../../store/actions/cart-actions";
import {useDispatch, useSelector} from "react-redux";

import cart_icon from '../../img/shopping_cart_icon.png'


const Header = props => {
    const totalPrice = useSelector(store => store.cartState.totalPrice)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initCartFromCookies())
    }, [])

    return (
        <header className={s.wrapper}>
            <Link to={'/'} className={s.cart_button}>Главная</Link>
            <Link to={'/cart'} className={s.cart_button}>{!!totalPrice && `${totalPrice}$`} <img src={cart_icon} alt={'cart_icon'}/></Link>
        </header>
    )
}

export default Header