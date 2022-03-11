import React from 'react';
import Navbar from '../Component/Navbar';
import Annoucement from '../Component/Annoucement';
import Slider from '../Component/Slider';
import Categories from '../Component/Categories';
import Products from '../Component/Products';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';

const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories/>
            <Products />
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
