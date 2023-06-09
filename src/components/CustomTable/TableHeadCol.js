import React from "react";

import { SortIcon } from "../Icons";

const TableHeadCol = ({ children, scope, classes, contentClassName, sort, sortBy }) => {
  return (
    <th
      scope={scope ? scope : "col"}
      className={`p-2 whitespace-nowrap w-fit ${classes} text-xs ${sort ? "sorting-hover hover:bg-gray-100 dark:hover:bg-bgmaindark cursor-pointer" : ""}`}
      onClick={() => (!!sort ? sortBy(children) : undefined)}
    >
      <div className={`flex gap-2 items-center justify-center text-center ${contentClassName}`}>
        {children}
        {!!sort ? (
          <span className="text-xs opacity-0 ">
            <SortIcon className="text-secondary" />
          </span>
        ) : null}
      </div>
    </th>
  );
};

export default TableHeadCol;
