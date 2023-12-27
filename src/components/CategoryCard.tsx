import { CategoryType } from '../data/categories'
import { Link } from 'react-router-dom'



export const CategoryCard = ({ title, description, img }: CategoryType) => {
    return (
        <Link to={title} className="category-card" style={{ width: "18rem" }}>
            <img src={img} height={200} className="card-img-top rounded" alt="image" />
            <div className="category-content text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </Link>
    )
}
