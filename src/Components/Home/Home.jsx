import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Services from './Services/Services';


// home Page 
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>

        </>
    );
};

export default Home;