import React, { useState, ChangeEvent } from 'react'
import { FaSearch } from "react-icons/fa";


export const SearchForm = () => {
    const [search, setSearch] = useState('')
    // const [inStockOnly, setInStockOnly] = useState(false);

    const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setSearch(target.value);
    }
    // const checkboxHandler = () => {
    //     setInStockOnly((active) => (!active))
    // }

    return (
        <div className="col-md-8 ">
            <form className="d-flex form-inputs">
                <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={onSearchChange}
                />
                <div className='search-icon'>

                    <FaSearch />
                </div>
            </form>

            {/* <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={checkboxHandler} />

                Solo mostrar productos en stock.
            </label> */}
        </div>
    )
}



