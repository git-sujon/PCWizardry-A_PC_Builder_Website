import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/features/buildPcSlice';
import { toast } from 'react-hot-toast';

const BuildPcProductsCard = ({products}) => {

const dispatch = useDispatch()


  const addToBuilderHandler = (product)=> {

    
    dispatch(addProduct(product))

    toast.success("Product add to Pc Builder")
    
  }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => {
          return (
            <div
              key={product?._id}
              className="card card-compact w-96 bg-green-50 shadow-xl rounded-none  border-2 border-green-200"
            >
              <Link href={`../products/${product._id}`}>
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
  
                <button onClick={()=>addToBuilderHandler(product)} className="btn btn-sm btn-success">Add To Builder</button>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default BuildPcProductsCard;