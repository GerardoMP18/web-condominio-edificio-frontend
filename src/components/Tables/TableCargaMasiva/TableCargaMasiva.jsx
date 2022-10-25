import React, { useEffect, useState } from "react";
import { STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD } from './someStyle'
import Navigation from "../../Navigation/Navigation";

function TableCargaMasiva(props) {
  console.log(props);
  const { data } = props;
  const keys = Object.keys(data[0]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    console.log("Paso 6");
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    console.log("Paso 9");
  }, [itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  console.log(currentItems);
  return (
    <>
      <STable>
        <STHead>
          <STHeadTR>
            {console.log("key.....", ...keys)}
            {["#", ...keys].map((item, index) => (
              <STH key={index}>
                {item}
              </STH>
            ))}
          </STHeadTR>
        </STHead>
        <STBody>
          {currentItems.map((obj, index) => (
            <STBodyTR key={index}>
              <STD>
                {index + 1}
              </STD>
              {keys.map((item, index) => {
                const value = obj[item];
                return (
                  <STD key={index}>
                    {value}
                  </STD>
                );
              })}
            </STBodyTR>
          ))}
        </STBody>
      </STable>
      <Navigation
        pageClick={handlePageClick}
        contador={pageCount}
      />
    </>
  );
}

export default TableCargaMasiva;
