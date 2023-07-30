import BuildPcProductsCard from "@/components/BuildPcProductsCard";
import RootLayout from "@/components/Layout/RootLayout";


const ProductsPage = ({ products }) => {


  return (
    <div>
      <BuildPcProductsCard products={products}/>
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export async function getServerSideProps(context) {
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
