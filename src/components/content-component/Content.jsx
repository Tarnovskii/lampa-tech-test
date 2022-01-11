import React, {useEffect} from 'react'

import {fetchProductsList} from "../../store/action-creators/products-actions";

import s from './content.module.css'
import ProductTile from "../product-tile-component/ProductTile";
import {useDispatch, useSelector} from "react-redux";

const Content = props => {
    const dispatch = useDispatch()
    const productsState = useSelector(store => store.productsState)

    useEffect(() => {
        dispatch(fetchProductsList())
    }, [])

    const productsListMapper = () => {
        return productsState.productsList.map(productData =>  <ProductTile productData={productData}/>)
    }

    return (
        <main className={s.wrapper}>
            {productsListMapper()}
        </main>
    )
}


export default Content