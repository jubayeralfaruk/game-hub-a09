import React from 'react';
import Navbar from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import useTitle from '../hooks/useTitle';

const AuthLayout = () => {
    useTitle("Auth");
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className=" min-h-[58.5vh] ">
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AuthLayout;