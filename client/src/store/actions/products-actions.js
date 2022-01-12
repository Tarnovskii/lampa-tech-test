import {ProductAPI} from "../../api/ProductAPI";

export const fetchProductsList = (page = 1) => {
    return dispatch => {
        dispatch(fetchingProductsListStarted())

        new ProductAPI().getProductsList(page).then(res => {
            dispatch(fetchingProductsListSuccess(res.data))
        }).catch(error => {
            dispatch(fetchingProductsListFailed(error))
        })
    }
}

const fetchingProductsListStarted = () => {
    return {type: '[PRODUCTS] FETCHING_STARTED'}
}

const fetchingProductsListFailed = (error) => {
    return {type: '[PRODUCTS] FETCHING_FAILED', value: error}
}

const fetchingProductsListSuccess = (productsData) => {
    return {type: '[PRODUCTS] FETCHING_SUCCESS', value: productsData}
}