import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { memo } from "react";
import { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";

import { ChevronIcon, SortIcon } from "../Icons";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCol from "./TableCol";
import TableHead from "./TableHead";
import TableHeadCol from "./TableHeadCol";
import TableRow from "./TableRow";
import Image from "next/image";
import { FullImage } from "../Global/FullImage/FullImage";

let sorting = {};
const SuperTable = ({
  columns,
  data,
  allowSelect,
  searchValue,
  itemsPerPage,
  selectedList,
  setSelectedList,
  classes
}) => {
  console.log(data, 'data')
  const { lang } = useContext(LanguageContext)
  const [filterList, setFilterList] = useState(data);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setFilterList(data);
  }, [data]);

  useEffect(() => {
    // Needed more work
    console.log('un...')
    console.log(itemOffset, itemsPerPage);
    const endOffset = itemOffset + parseInt(itemsPerPage);
    setCurrentItems(filterList?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterList?.length / parseInt(itemsPerPage)));
  }, [filterList, itemsPerPage, itemOffset]);
  useEffect(() => { }, [refresh]);
  useEffect(() => {
    if (searchValue) {
      let newList = [];
      for (const col of columns) {
        for (const item of data) {
          if (typeof item[col] == "string") {
            if (
              item[col]?.toLowerCase()?.startsWith(searchValue?.toLowerCase())
            )
              newList.push(item);
          } else {
            if (
              item[col]
                ?.toString()
                ?.toLowerCase()
                ?.startsWith(searchValue?.toLowerCase())
            )
              newList.push(item);
          }
        }
      }
      // setItemOffset(1);
      setCurrentItems(newList?.slice(0, itemsPerPage));
    } else {
      // setItemOffset(1);
      setFilterList(data);
      setCurrentItems(data?.slice(0, itemsPerPage));
    }
  }, [searchValue, data,]);

  useEffect(() => {
    console.log("rendering");
  }, []);

  const handelSelect = useCallback(
    (itemId) => {
      if (selectedList[itemId]) {
        let newSelectedList = selectedList;
        delete newSelectedList[itemId];
        setSelectedList((prev) => {
          return {
            ...prev,
            ...newSelectedList,
          };
        });
      } else {
        setSelectedList((prev) => {
          return {
            ...prev,
            [itemId]: itemId,
          };
        });
      }
    },
    [selectedList]
  );
  const handleSelectedAll = useCallback(
    (e) => {
      if (!e?.target?.checked) {
        setSelectedList({});
      } else {
        let newList = {};
        for (const key in data) {
          newList[data?.[key]?.id] = data?.[key]?.id;
        }
        setSelectedList(newList);
      }
    },
    [selectedList]
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterList?.length;
    setItemOffset(newOffset);
  };
  const sortBy = async (col) => {
    const list = [...currentItems];
    const newSortOrder = sorting[col] === "asc" ? "desc" : "asc";
    let newList = list.sort((a, b) => {
      const valueA = a[col];
      const valueB = b[col];
      if (typeof valueA === "string") {
        return newSortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return newSortOrder === "asc" ? valueA - valueB : valueB - valueA;
    });
    setCurrentItems(newList);
    setRefresh((prev) => !prev);
    sorting[col] = newSortOrder;
  };
  return (
    <>
      <Table containerClassName={classes?.containerClassName} tableClassName={classes.table}>
        <TableHead classes={classes?.head}>
          <TableRow classes={classes?.headRow}>
            {allowSelect ? (
              <TableHeadCol classes={classes?.colHead}>
                <input
                  type="checkbox"
                  className="w-4 h-4 "
                  onChange={handleSelectedAll}
                />
              </TableHeadCol>
            ) : null}
            {columns?.map((col, index) => (
              <TableHeadCol classes={classes?.colHead} key={`${col}-${index}`} sort sortBy={sortBy}>
                {fetchWord(col, lang)}
              </TableHeadCol>
            ))}
          </TableRow>
        </TableHead>
        <TableBody classes={classes?.body}>
          {currentItems?.map((row, index) => {
            return (
              <TableRow
                key={`${row?.Name}-${index}`}
                classes={`border-b dark:border-borderdark whitespace-nowrap ${!!selectedList?.[row?.id] ? "bg-gray-100 dark:bg-[#1115]" : ""
                  } ${classes?.row}`}
              >
                {allowSelect ? (
                  <TableCol classes={`!py-4 border ${classes?.colBody}`}>
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      checked={!!selectedList?.[row?.id]}
                      onChange={() => handelSelect(row?.id)}
                    />
                  </TableCol>
                ) : null}
                {columns?.map((col, index) => {
                  if (col?.toLowerCase() === 'image')
                    return (
                      <TableCol classes={`!py-4 border ${classes?.colBody}`} >
                        <FullImage src={row?.[col]} alt="image description" height={50} width={70} className="block mx-auto cursor-pointer" />
                      </TableCol>
                    )
                  else
                    return <TableCol classes={`!py-4 border ${classes?.colBody}`} key={index}>{row?.[col]}</TableCol>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {currentItems.length ? (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <span className="flex  scale-75 ltr:rotate-180 rtl:-rotate-180">
                <ChevronIcon />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <span className="flex scale-75 rtl:rotate-180">
                <ChevronIcon />
              </span>
            }
            renderOnZeroPageCount={null}
            className="pagination flex gap-6 items-center shadow p-3"
            activeClassName="bg-blue-500 p-1 px-2 rounded text-sm text-white"
            previousClassName="rounded-md dark:bg-borderdark dark:text-gray-50 text-gray-500 bg-gray-100 shadow px-1"
            nextClassName="rounded-md dark:bg-borderdark dark:text-gray-50 text-gray-500 bg-gray-100 shadow px-1"
            disabledClassName="text-gray-200 dark:text-gray-600"
          />
        </>
      ) : (
        <div className="text-red-500 text-center mt-2">
          {fetchWord('no_results', lang)}
        </div>
      )}
    </>
  );
};

export default memo(SuperTable);
