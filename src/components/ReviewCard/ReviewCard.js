import React from "react";
import RatingStars from "../RatingStars/RatingStars";
import Image from "next/image";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex gap-2 mb-4 rounded-[40px] p-2 bg-[#F9F9F9]">
      <Image
        src={review?.image}
        alt={review?.name}
        height={80}
        width={80}
        className="object-contain"
      />
      <div className="flex-1 px-2 rtl:pl-4 ltr:pr-4">
        <div className="flex justify-between items-center">
          <RatingStars rating={review?.rating} />
          <span className="text-sm text-lead">{review?.date}</span>
        </div>
        <h3 className="font-medium">{review?.name}</h3>
        <p className="text-sm text-lead">{review?.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
