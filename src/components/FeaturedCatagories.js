import React from "react";
import categories from "./utils/Catagories";
import Image from "next/image";
import Link from "next/link";

const FeaturedCatagories = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-slate-700 ">
        Featured Catagories
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div
            key={category.name}
            className="card w-96 h-36 bg-base-100 shadow-xl image-full rounded-none"
          >
            <figure>
              <Image
                src={category.image}
                width={384}
                height={0}
            
                alt={category.placeHolder}
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="text-3xl font-bold text-white">{category.placeHolder}</h2>

              <div className="card-actions ">
                <Link href={`/catagories/${category.name}`} className="btn btn-success btn-sm ">Explore</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCatagories;
