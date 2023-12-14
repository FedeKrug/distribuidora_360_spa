import React, { useState, ChangeEvent } from 'react'

export const SearchForm = () => {
    const [search, setSearch] = useState('')

    const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        setSearch(target.value);
    }

    return (
        <div className="col-md-8">
            <div className="d-flex form-inputs">
                <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Search any product..."
                    value={search}
                    onChange={onSearchChange}
                />
            </div>
        </div>
    )
}
