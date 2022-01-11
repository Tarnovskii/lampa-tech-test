import React, {Fragment} from 'react'
import Header from "./components/header-component/Header";
import Content from "./components/content-component/Content";

const Application = props => {
  return (
      <Fragment>
        <Header/>
        <Content/>
      </Fragment>
  )
}

export default Application