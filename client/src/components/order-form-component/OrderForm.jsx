import React from 'react'
import {Field, reduxForm} from 'redux-form'

import s from './oreder-form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {OrderAPI} from "../../api/OrderAPI";
import {getCartProductsArrayFromCookie} from "../../utils/cart-manager";
import {clearCart} from "../../store/actions/cart-actions";

const OrderForm = props => {
    const {totalPrice, reset} = props
    const dispatch = useDispatch()
    const customerData = useSelector(store => store.form?.orderCreationForm?.values)

    const submitHandler = (e) => {
        e.preventDefault();
        new OrderAPI().sendMakeOrderRequest({
            products: getCartProductsArrayFromCookie(),
            customerData
        }).then(res => {
            reset()
            dispatch(clearCart())
        }).catch(e => console.log(e))
    }

    return (
        <form className={s.wrapper} onSubmit={submitHandler}>
            <Field required placeholder={'FIRST NAME'} type={'text'} name={'firstName'} component={'input'}/>
            <Field placeholder={'SURNAME'} type={'text'} name={'surname'} component={'input'}/>
            <Field required placeholder={'ADDRESS'} type={'text'} name={'address'} component={'input'}/>
            <Field required placeholder={'PHONE'} type={'tel'} name={'phoneNumber'} component={'input'}/>
            <button disabled={!totalPrice} type={'submit'}>ORDER</button>
        </form>
    )
}

export default reduxForm({
    form: 'orderCreationForm'
})(OrderForm)