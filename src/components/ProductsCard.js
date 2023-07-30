import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductsCard = ({ products }) => {


  return (
    <div className="mt-20">
        <h2 className="text-2xl font-bold text-slate-700 ">Featured products</h2>
        <div className="divider"></div> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {products?.map((product) => {
          return (
            <Link href={`../products/${product._id}`} 
              key={product?._id}
              className="  transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                className="h-48 w-full object-cover object-center"
                src={
                    "https://in-media.apjonlinecdn.com/magefan_blog/What_is_FPS_and_How_Can_You_Optimise_Your_PC_for_Gaming_1.png"
                  }
                alt="dd"
                width={400}
                height={192}
              />

              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {product?.product_name}
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                  {product?.category}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    ${product?.price}
                  </p>
                  <p className="text-base  font-medium text-gray-500  dark:text-gray-300">
                    {product?.status}
                  </p>
                  <div className="ml-auto text-base font-medium text-green-500 flex items-center gap-2">
                
                    <input type="radio" name="rating-1" className="mask mask-star" />/
                    <p>{product?.average_rating}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

          
    </div>
  );
};

export default ProductsCard;
