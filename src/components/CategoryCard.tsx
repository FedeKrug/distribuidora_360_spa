import React from 'react'
import { CategoryType } from '../data/categories'



export const CategoryCard = ({ title, description, img, action }: CategoryType) => {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button onClick={action} className="btn btn-primary">Descargar Catálogo</button>
            </div>
        </div>
    )
}
