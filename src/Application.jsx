import React, {Fragment} from 'react'
import Header from "./components/header-component/Header";
import Content from "./components/content-component/Content";
import Footer from "./components/footer-component/Footer";

const Application = props => {
  return (
      <Fragment>
        <Header/>
        <Content/>
          <Footer/>
      </Fragment>
  )
}

export default Application