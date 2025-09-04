import React, { useState } from "react";
import Navbar from '../Navbar';
import Blogs from '../Blogs';
import Footer from "../Footer";



const Homepage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
        <Blogs />
        <Footer/>

        </div>
    );
};

export default Homepage