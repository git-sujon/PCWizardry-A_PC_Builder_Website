import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
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
  console.log("products:", products);

  return (
    <div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                src={
                  "https://in-media.apjonlinecdn.com/magefan_blog/What_is_FPS_and_How_Can_You_Optimise_Your_PC_for_Gaming_1.png"
                }
                alt={product.product_name}
                width={300}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.product_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
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
