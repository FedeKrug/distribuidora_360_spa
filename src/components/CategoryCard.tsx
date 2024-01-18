import { CategoryType } from '../data/categories'
import { Link } from 'react-router-dom'
import "../styles/categoryCard.css"


export const CategoryCard = ({ title, img }: CategoryType) => {
    return (
        <div className='category'>

            <Link to={`/${title}`} className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={title} />

                <div className="category-content">
                    <h3 className="card-text">{title}</h3>
                </div>
            </Link>
        </div>
    )
}
