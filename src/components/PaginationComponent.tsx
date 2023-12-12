import React, { useContext } from 'react'
import { PaginationContext } from '../context/PaginationContext';

type PaginationType = {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (val: number) => void
    currentPage: number;
}

export const PaginationComponent = () => {
    let pages = [];
    const { currentPage, setCurrentPage, productsPerPage, totalPosts } = useContext(PaginationContext);

    for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
        pages.push(i);
    }

    console.log(totalPosts, currentPage)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>

                {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li> */}


                {
                    pages.map((page, index) => (
                        <li className={`page-item ${(page == currentPage) ? 'active' : ''}`} key={index}>
                            <button className="page-link" onClick={setCurrentPage}>{page}</button>
                        </li>
                    ))
                }

                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
