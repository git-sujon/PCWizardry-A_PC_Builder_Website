import Image from "next/image";
import React from "react";
import RatingStar from "./RatingStar";

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {reviews.map((review) => (
        <div key={review?.comment}>
          <blockquote className=" bg-amber-100 p-4 border border-lime-900  ">
            <div className="flex items-center gap-4">
              <Image
                alt="user review"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
                width={100}
                height={100}
              />

              <div>
                <RatingStar rating={review?.rating} />

                <p className="mt-1 text-lg font-bold text-gray-900 ">
                  {review?.user}
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
              {review?.comment}
            </p>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
