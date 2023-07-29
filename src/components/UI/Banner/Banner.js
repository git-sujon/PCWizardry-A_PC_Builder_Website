import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
   
      
      <section
        className="relative bg-[url(https://www.minimaldesksetups.com/wp-content/uploads/2020/09/01-WFH-Banner.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-black-900 to-blue-900"
        ></div>
      
        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-white"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Let us find your
      
              <strong className="block font-extrabold ">
                Your dream PC
              </strong>
            </h1>
      
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Fearlessly exploring new frontiers, we push boundaries and achieve beyond expectations
            </p>
      
            <div className="mt-8 flex flex-wrap gap-4 text-center">
            <button className="btn btn-success  text-white">Build Your PC</button>
           
             <button className="btn btn-warning  text-white">Explore More</button>

            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;