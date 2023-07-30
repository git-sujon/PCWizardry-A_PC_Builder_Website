import Image from "next/image";
import React, { useEffect } from "react";


const BuilderProducts = ({ products, placeHolderCategory }) => {


const pcBuildComplete = products?.filter(product => product?.category === placeHolderCategory)






  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {pcBuildComplete?.map((product) => {
                return (
                  <tr key={product._id}>
                    <th>
                      <Image
                        src={
                          "https://in-media.apjonlinecdn.com/magefan_blog/What_is_FPS_and_How_Can_You_Optimise_Your_PC_for_Gaming_1.png"
                        }
                        width={80}
                        height={50}
                        alt={product.product_name}
                      />
                    </th>
                    <td>{product.product_name}</td>
                    <td>{product.status}</td>
                    <td>$ {product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuilderProducts;
