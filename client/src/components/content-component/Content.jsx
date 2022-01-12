import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import ProductTile from "../product-tile-component/ProductTile";
import {fetchProductsList} from "../../store/actions/products-actions";

import s from './content.module.css'

import loader from '../../img/loader.gif'



const Content = props => {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1)
    const productsState = useSelector(store => store.productsState)

    useEffect(() => {
        dispatch(fetchProductsList(pageNumber))
    }, [pageNumber])

    const productsListMapper = () => {
        return productsState.productsList.map(productData =>  <ProductTile cart={false} productData={productData}/>)
    }

    const changePageNumber = (count) => {
        if (pageNumber + count < 1) setPageNumber(1)
        else setPageNumber(pageNumber + count)
    }

    return (
        <main className={s.wrapper}>
            {productsState.isFetching ? <img src={loader} alt={'loader'}/> : productsListMapper()}
            <div className={s.pagination}>
                <button onClick={changePageNumber.bind(null, -1)}>{'<<<<<'}</button>
                <span>{pageNumber}</span>
                <button onClick={changePageNumber.bind(null, 1)}>{'>>>>>'}</button>
            </div>
        </main>
    )
}


export default Content