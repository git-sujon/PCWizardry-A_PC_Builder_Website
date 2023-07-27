import React from 'react';
import Navbar from '../UI/Shared/Navbar';
import Footer from '../UI/Shared/Footer';

const RootLayout = ({children}) => {
    return (
       <>
       <Navbar />
       {children}
       <Footer />
       </>
    );
};

export default RootLayout;