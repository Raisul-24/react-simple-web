import React from 'react';
import Navbar from '../SharedComponet/Navbar/Navbar';
import Footer from '../SharedComponet/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;