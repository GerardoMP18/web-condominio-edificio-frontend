import React from 'react'
import { StylesNavigation }from "./someStyle"
import ReactPaginate from 'react-paginate';

export default function Navigation({ pageClick, contador }) {
  return (
    <StylesNavigation>
        <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={pageClick}
                  pageRangeDisplayed={4}
                  pageCount={contador}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageLinkClassName='page-num'
                  previousLinkClassName='page-num'
                  nextLinkClassName="page-num"
                  activeLinkClassName="active"
              />
    </StylesNavigation>
  )
}
