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
    <div className="">
      <SectionTitle title={fetchWord("my_works", lang)} />
      <div className="px-8">
        {previousWorks?.map((work) => (
          <TimeLineCard key={work?.comment} work={work} />
        ))}
      </div>
    </div>
  );
};

export default ProviderWorksTimeLine;
