import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const categories = [
  { name: "cpu" },
  { name: "ram" },
  { name: "motherboard" },
  { name: "power-supply-unit" },
  { name: "storage-device" },
  { name: "monitor" },
  { name: "others" },
];

const ProductsPage = ({ products }) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => {
        return (
          <div
            key={product?._id}
            className="card card-compact w-96 bg-green-50 shadow-xl rounded-none  border-2 border-green-200"
          >
            <Link href={`item/${product._id}`}>
              <figure>
                <Image
                  src={
                    "https://in-media.apjonlinecdn.com/magefan_blog/What_is_FPS_and_How_Can_You_Optimise_Your_PC_for_Gaming_1.png"
                  }
                  alt={product?.product_name}
                  width={400}
                  height={200}
                />
              </figure>
              <div className="card-body ">
                <div className="flex justify-between items-center ">
                  <h3 className="text-xl font-bold">
                    {product?.product_name}{" "}
                  </h3>
                </div>
              <div className="flex items-center justify-between ">
              <div className="badge badge-neutral ">{product?.category}</div>
                <div className="badge badge-secondary ">{product?.status}</div>
              </div>
              </div>
            </Link>
            <div className="flex justify-between items-center pb-3 px-3">
              <p className="font-bold text-xl text-yellow-600">
                ${product?.price}
              </p>

              <button className="btn btn-sm btn-success">Add To Builder</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  //   const res = await fetch(`http://localhost:3000/api/products/`);
  //   const products = await res.json();

  const paths = categories.map((category) => ({
    params: { category: category?.name },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/products/category/${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
}
