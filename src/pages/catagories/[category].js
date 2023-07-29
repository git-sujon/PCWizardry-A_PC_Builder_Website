import RootLayout from "@/components/Layout/RootLayout";
import ProductsCard from "@/components/ProductsCard";
import categories from "@/components/utils/Catagories";




const ProductsPage = ({ products }) => {


  return (
    <div>
      <ProductsCard products={products}/>
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
