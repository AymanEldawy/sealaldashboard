import RatingStars from "@/components/RatingStars/RatingStars";
import Image from "next/image";
import React from "react";

const TimeLineCard = ({ work }) => {
  return (
    <div className="mb-4 bg-gray-100 p-4 px-6 rounded-md min-w-[600px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full border-2 border-gray-600"
            src={"/images/clients/Group 3.png"}
            alt={`client avatar`}
            height={40}
            width={40}
          />
          <div className="">
            <RatingStars rating={work?.rating} />
            <h3 className="text-lg font-medium">{work?.clientName}</h3>
          </div>
        </div>
        <span className="text-gray-600 text-sm">{work?.date}</span>
      </div>
      <p className="text-lead text-sm my-2">{work?.comment}</p>
      <div className="flex gap-12 flex-wrap">
        {work?.images?.map((img, index) => (
          <Image
            className="rounded-md"
            src={img}
            key={index}
            alt={`gallery-${index}`}
            height={160}
            width={140}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLineCard;
