import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { SearchForm } from './SearchForm'
import { FaShoppingCart } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext';

export const SearchComponent = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <section className="header-main border-bottom primary">
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                    <Link className="col-md-2" to='/'>
                        <img className="d-none d-md-flex" src={`${(isDark) ? '../../public/images/Logo3.png' : '../../public/images/Logo4.png'}`} width="100" />
                    </Link>
                    <SearchForm />

                    <div className="col-md-2">
                        <div className="d-flex d-md-flex flex-row align-items-center">
                            {/* <span className="shop-bag">
                                <FaShoppingCart />
                                1

                            </span> */}
                            {/* <div className="d-flex flex-column ms-2">
                                    <span className="fw-bold">$27.90</span>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
