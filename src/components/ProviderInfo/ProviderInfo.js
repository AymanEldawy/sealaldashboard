import { LanguageContext } from "@/context/LangContext";
import { reviews } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext, useState } from "react";

import SeeMore from "../Global/SeeMore/SeeMore";
import Modal from "../Modal/Modal";
import ProviderWorksTimeLine from "../ProviderWorksTimeLine/ProviderWorksTimeLine";
import ReviewCard from "../ReviewCard/ReviewCard";

const ProviderInfo = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  const [view, setView] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      <div className="flex gap-4 justify-between">
        {view !== "gallery" ? (
          <>
            <div className="max-w-2xl flex-1">
              <h3 className="text-primary text-lg mb-4  capitalize">
                {fetchWord("about", lang)} {provider?.name}
              </h3>
              <p className="text-lead text-sm max-w-xl">
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with
              </p>
              <div className="mt-20">
                <div className="flex justify-between gap-4 mb-4 items-center">
                  <h3 className="text-primary text-lg capitalize">
                    {fetchWord("customer_feedback", lang)}
                  </h3>
                  <SeeMore link="" />
                </div>
                {reviews?.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </div>
            <div className="max-w-[400px]">
              <div className="flex justify-between gap-4 mb-4 items-center">
                <h3 className="text-primary text-lg capitalize">
                  {fetchWord("some_work", lang)}
                </h3>
                <button
                  className="capitalize text-secondary"
                  onClick={() => setView("gallery")}
                >
                  {fetchWord("see_more", lang)}
                </button>
              </div>
              <div className="gap-2 grid grid-cols-2">
                <Image
                  src="/images/projects/1.png"
                  alt="works 1"
                  height={140}
                  width={140}
                  className=" w-full h-56 rounded-md object-cover"
                  onClick={() => setSelectedImage("/images/projects/1.png")}
                />
                <Image
                  src="/images/projects/2.png"
                  alt="works 2"
                  height={140}
                  width={140}
                  className=" w-full h-56 rounded-md object-cover "
                  onClick={() => setSelectedImage("/images/projects/2.png")}
                />
                <Image
                  src="/images/projects/3.png"
                  alt="works 2"
                  height={140}
                  width={140}
                  className="w-full h-56 rounded-md object-cover "
                  onClick={() => setSelectedImage("/images/projects/3.png")}
                />
                <Image
                  src="/images/projects/4.png"
                  alt="works 2"
                  height={140}
                  width={140}
                  className="w-full h-56 rounded-md object-cover "
                  onClick={() => setSelectedImage("/images/projects/4.png")}
                />
                <Image
                  src="/images/projects/5.png"
                  alt="works 2"
                  height={140}
                  width={140}
                  className="w-full h-56 rounded-md object-cover "
                  onClick={() => setSelectedImage("/images/projects/5.png")}
                />
                <Image
                  src="/images/projects/6.png"
                  alt="works 2"
                  height={140}
                  width={140}
                  className="w-full h-56 rounded-md object-cover "
                  onClick={() => setSelectedImage("/images/projects/6.png")}
                />
              </div>
            </div>
          </>
        ) : (
          <ProviderWorksTimeLine />
        )}
      </div>
      <Modal open={!!selectedImage} close={() => setSelectedImage("")}>
        <Image
          src={selectedImage}
          alt="works 2"
          height={400}
          width={500}
          className="w-full max-h-[90vh] rounded-md object-cover "
        />
      </Modal>
    </>
  );
};

export default ProviderInfo;
