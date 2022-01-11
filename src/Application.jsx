import React, {Fragment} from 'react'
import Header from "./components/header-component/Header";
import Content from "./components/content-component/Content";
import Footer from "./components/footer-component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShoppingCart from "./components/shopping-cart-component/ShoppingCart";

const Application = props => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Content/>}/>
                <Route path={'/cart'} element={<ShoppingCart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Application