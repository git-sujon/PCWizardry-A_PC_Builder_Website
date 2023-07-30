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
  // if(typeof window === "undefined"){
  //   return { paths:[], fallback: false };
  // }
  const paths = categories.map((category) => ({
    params: { category: category?.name },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { params } = context;
  
  // if(typeof window === "undefined"){
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }



  const res = await fetch(
    `${process.env.URL}/api/products/category/${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
}
