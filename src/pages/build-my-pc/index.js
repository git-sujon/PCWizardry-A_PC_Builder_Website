import RootLayout from "@/components/Layout/RootLayout";
import React, { useEffect, useState } from "react";
import categories from "@/components/utils/Catagories";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import BuilderProducts from "@/components/BuilderProducts";
import { toast } from "react-hot-toast";

const PcBuilderPage = () => {
  const products = useSelector((state) => state.buildPc.products);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (products.length >= 5) {
      setDisabled(false);
    }
  }, [products.length]);

  return (
    <div className="flex flex-col gap-y-10 mx-auto max-w-screen-lg">
      {categories
        .filter((category) => category.name !== "others")
        .map((category) => {
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
                <div></div>

                <BuilderProducts
                  products={products}
                  placeHolderCategory={category.name}
                />
              </div>
            </div>
          );
        })}

      <button className="btn btn-warning " onClick={()=> toast.success("Congratulation !!! 🎉🎉🎉 ")} disabled={disabled}>
        Complete Build
      </button>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

