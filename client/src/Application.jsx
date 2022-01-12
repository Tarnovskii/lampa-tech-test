import React, {Fragment} from 'react'
import Header from "./components/header-component/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const Content = React.lazy(() => import("./components/content-component/Content"))
const ShoppingCart = React.lazy( () => import("./components/shopping-cart-component/ShoppingCart"))

const Application = props => {
    return (
        <BrowserRouter>
            <Header/>
            <React.Suspense fallback={'Loading....'}>
                <Routes>
                    <Route path={'/'} element={<Content/>}/>
                    <Route path={'/cart'} element={<ShoppingCart/>}/>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default Application