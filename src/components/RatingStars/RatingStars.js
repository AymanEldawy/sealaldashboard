import React from "react";
import { StarIcon } from "../Icons";

const RatingStars = ({ rating, count }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        ?.map((rate, index) => (
          <StarIcon
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-400"}
          />
        ))}
        {count ? <span className=" mx-1 font-medium text-black text-xs">{count}</span> : null}
    </div>
  );
};

export default RatingStars;
