import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { previousWorks } from "@/data/dummyData";
import TimeLineCard from "./TimeLineCard/TimeLineCard";

const ProviderWorksTimeLine = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex justify-between gap-2">
      <div >
        <SectionTitle title={fetchWord("my_works", lang)} />
        <div className="px-8">
          {previousWorks?.map((work) => (
            <>
            <TimeLineCard key={work?.comment} work={work} />
            <TimeLineCard key={work?.comment} work={work} />
            <TimeLineCard key={work?.comment} work={work} />
            <TimeLineCard key={work?.comment} work={work} />
            </>
          ))}
        </div>
      </div>
      <div className="sticky top-8 h-screen">
        <h3 className="text-primary text-lg mb-4  capitalize">
          {fetchWord("about", lang)}
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
      </div>
    </div>
  );
};

export default ProviderWorksTimeLine;
