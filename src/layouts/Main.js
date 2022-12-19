import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import HeaderV2 from '../components/HeaderV2';
import ScrollToTop from '../components/ScrollToTop';

const Main = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      {/* <Header></Header> */}
      <HeaderV2></HeaderV2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;