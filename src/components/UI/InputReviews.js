import React, { useState } from "react";
import RatingStar from "./RatingStar";
import { toast } from "react-hot-toast";

const InputReviews = ({ individual_ratingUpdate }) => {
    const [state, setState] = useState("");

    const onInput = (e) =>{
        e.preventDefault()
        setState(e.target.value);
    } 
  
    const onSubmit = (e) => {
        e.preventDefault()
        toast.success("Review Submitted")
    
    };
    const onClear = (e) => {
        e.preventDefault()
      setState("");
    };


  return (
    <div>
      <div>
        <div className=" my-10 ">
          <div className=" flex items-center gap-x-20 flex-wrap mb-5">
            <h3 className="text-xl font-bold">Add Your Review:</h3>
            <div className="flex items-center">
              <p className=" font-semibold mr-2">
                your rating:
                <span className="text-xl font-bold ml-2">
                  {individual_ratingUpdate}
                </span>
                /
              </p>
              <RatingStar rating={individual_ratingUpdate} />
              <span className="font-semibold mr-2 text-slate-500 ml-1">
                out of 5
              </span>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <textarea
              placeholder="Write your review here..."
              className="textarea textarea-bordered textarea-lg w-full "
              name="reviewText"
              value={state} onInput={onInput}
            ></textarea>
            <div className="flex items-center justify-end gap-2 bg-white p-3">
              <button onClick={onClear}  className="btn btn-sm btn-neutral">clear</button>

              <button className="btn btn-warning btn-sm" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputReviews;
