import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext } from "react";

import { New } from "../New";

const TabsList = ({
  direction,
  list,
  keyName,
  imgClassName,
  iconClassName,
  itemClassName,
  activeClassName,
  containerClassName,
  setActiveTab,
  activeTab,
  iconEndClassName,
  separated,
  separatedClassName,
  extraContentClassName
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div
      className={`flex ${direction === "vertical" ? "flex-col" : ""
        }  ${containerClassName}`}
    >
      {list?.map((item, index) => (
        <>
          <button
            key={keyName ? item?.[keyName] : item}
            onClick={() => setActiveTab(item)}
            className={`flex items-center gap-3 px-4 py-2
             ${itemClassName} ${activeTab === item[keyName] || activeTab === item
              ? ` ${activeClassName}`
              : ""
              }`}
          >
            {item?.image ? (
              <Image
                src={item?.image}
                alt={item[keyName]}
                height={60}
                width={80}
                className={imgClassName}
              />
            ) : null}
            {item?.icon ? (
              <span className={iconClassName}>{item?.icon}</span>
            ) : null}
            {keyName ? fetchWord(item?.[keyName], lang) : fetchWord(item, lang)}
            {item?.extraContent ? <span className={extraContentClassName}>{item?.extraContent}</span> : null}
            {item?.iconEnd ? (
              <span className={iconEndClassName}>{item?.iconEnd}</span>
            ) : null}
            {
              item === 'Buy_again' ? <New />
                : null
            }
          </button>
          {separated && index !== (list?.length - 1) ? (
            <span className={`h-4 w-[1px] bg-gray-300  ${separatedClassName}`} />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default TabsList;
