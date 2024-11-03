import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Routes = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <NavBar></NavBar>
           <Outlet>
           </Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Routes;