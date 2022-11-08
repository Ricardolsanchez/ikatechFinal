import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from "../../Pages/Home/Home";
import Detail from '../../Pages/Detail.tsx/Detail';


const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Detail />
      <Home/>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout