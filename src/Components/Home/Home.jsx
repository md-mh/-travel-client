import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Services from './Services/Services';


// home Page 
const Home = () => {

    const { loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    } else {
        return (
            <>
                <Banner></Banner>
                <Services></Services>
                <Blog></Blog>
                <Contact></Contact>

            </>
        );
    }

};

export default Home;