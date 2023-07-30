import RootLayout from "@/components/Layout/RootLayout";
import React from "react";
import categories from "@/components/utils/Catagories";
import Image from "next/image";
import Link from "next/link";


const PcBuilderPage = () => {



 


  return (
    <div className="flex flex-col gap-y-10 mx-auto max-w-screen-lg">
      {categories.filter(category=> category.name !== "others").map((category) => {
        return (
          <div
            key={category.name}
            className="card card-side bg-blue-100 shadow-xl rounded-none  "
          >
            <figure className="">
              <Image
                src={category.image}
                width={150}
                height={80}
                alt={category.placeHolder}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{category.placeHolder}</h2>

              <Link
                href={`../build-my-pc/${category.name}`}
                className="card-actions justify-end"
              >
                <button className="btn  btn-sm btn-warning">Choose</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
