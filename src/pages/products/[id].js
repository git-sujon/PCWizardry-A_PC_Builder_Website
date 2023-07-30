import RootLayout from "@/components/Layout/RootLayout";
import InputReviews from "@/components/UI/InputReviews";
import RatingStar from "@/components/UI/RatingStar";
import Reviews from "@/components/UI/Reviews";
import Image from "next/image";
import { CiSquareCheck } from "react-icons/ci";

const ProductDetails = ({ product }) => {
  const {
    _id,
    product_name,
    image,
    category,
    status,
    price,
    description,
    key_features,
    individual_rating,
    average_rating,
    reviews,
  } = product;

  console.log("reviews:", reviews);

  const individual_ratingUpdate = Math.floor(individual_rating);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 rounded-none">
        <Image
          src={
            "https://in-media.apjonlinecdn.com/magefan_blog/What_is_FPS_and_How_Can_You_Optimise_Your_PC_for_Gaming_1.png"
          }
          width={500}
          height={800}
          alt={product_name}
        />

        <div className="md:mx-10">
          <h2 className="text-4xl font-bold text-slate-700 ">{product_name}</h2>
          <p className="mt-5 text-xl">{description}</p>

          <div className="flex items-center gap-x-6 gap-y-5 mt-5 flex-wrap">
            <div className="badge badge-secondary badge-outline  rounded-none badge-lg">
              {status}
            </div>
            <div className="badge badge-neutral badge-outline  rounded-none badge-lg">
              {category}
            </div>

            {/* rating  */}
            <div className="flex items-center">
              <p className=" font-semibold mr-2 text-slate-500">
                Avg Rating:{" "}
                <span className="text-xl font-bold">{average_rating}</span>
              </p>
              <RatingStar rating={average_rating} />
              <div className="rating rating-half">
                {!Number.isInteger(average_rating) ? (
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2  bg-orange-400 mask-half-1"
                    checked
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* key_features  */}
          <div className="mt-5">
            <p className="text-2xl font-bold text-slate-700 mb-2">
              Key Features
            </p>
            {key_features.map((features, idx) => (
              <p
                key={idx}
                className="flex items-center gap-5 font-semibold text-slate-700"
              >
                <CiSquareCheck className="text-green-600 " /> {features}
              </p>
            ))}
          </div>

          {/* price and action */}

          <div className="md:flex items-end gap-x-20">
            <div className="flex items-center mt-10 text-4xl font-semibold text-orange-600 mb-3 md:mb-0">
              <p>$</p>
              <p>{price}</p>
            </div>
            <div>
            
            </div>
          </div>
        </div>
      </div>

      {/* user reviews  */}
      <div className="mt-32">
        <h2 class="text-center text-4xl font-bold tracking-tight sm:text-5xl mb-20">
          Read trusted reviews from our customers
        </h2>
    
          <Reviews reviews={reviews} />
          <InputReviews individual_ratingUpdate={individual_ratingUpdate}/>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
}
