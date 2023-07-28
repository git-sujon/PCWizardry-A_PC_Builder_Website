import React from 'react';
import Navbar from '../UI/Shared/Navbar';
import Footer from '../UI/Shared/Footer';

const RootLayout = ({children}) => {
    return (
       <>
       <Navbar />
    <div className='min-h-screen'>
    <div className='px-10 mx-auto my-10'>
      {children}
      </div>
    </div>
       <Footer />
       </>
    );
};

export default RootLayout;