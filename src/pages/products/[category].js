import RootLayout from '@/components/Layout/RootLayout';
import { useRouter } from 'next/router';

const ProductsPage = () => {

    const {query} = useRouter();



 



  


    return (
        <div>
            this is the category of {query?.category}
        </div>
    );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  


  