import {useState} from "react";
import ReactPaginate from "react-paginate";
import './pagination.css'


export function PaginatedItems({itemsPerPage, onChangePage, items, currentItems, pageCount}) {

    const handlePageClick = (event) => {
        onChangePage(event.selected + 1)
    };

    return (
        <div id='container'>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}