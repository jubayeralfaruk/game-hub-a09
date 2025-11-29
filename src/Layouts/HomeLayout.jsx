import React from 'react';
import Navbar from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";
import useTitle from '../hooks/useTitle';



const HomeLayout = () => {
    useTitle("GameHub");
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="relative">
            <motion.div 
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
            />

            <Navbar></Navbar>
            <div className="min-h-[58.5vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;