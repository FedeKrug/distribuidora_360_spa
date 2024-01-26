import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useParams } from "react-router-dom";
import { ProductsType } from "../data/products";
import { useState } from "react";

type ProductPageType = {
    productName: string;
    description: string;
    imgURL: string;
    brand: string;
    sku: string;
    category: string;
}


export const ProductPage = ({ products }: any) => {

    const { productId } = useParams();
    const product = products.find((producto: ProductsType) => producto._id === productId);
    const [productCounter, setProductCounter] = useState(0);


    const handleAddCounter = () => {
        setProductCounter((c) => c + 1);
    }

    const handleSubstractCounter = () => {
        setProductCounter((c) => c - 1 < 0 ? 0 : c - 1);

    }

    return (<>
        <section className="py-5">
            <div className="container">
                <div className="row gx-5">
                    <aside className="col-lg-6">
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank">
                                <img className="rounded-4 fit"
                                    src="../../public/images/Colgante4.jpg"
                                    style={{ maxWidth: "100%", maxHeight: '100%', margin: 'auto' }}
                                />
                            </a>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" /*className="item-thumb"*/>
                                <img width="60" height="60"
                                    className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" /*className="item-thumb"*/>
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" />
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image"
                                href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" /*className="item-thumb"*/>
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" />
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" /*className="item-thumb"*/>
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" />
                            </a>
                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" /*className="item-thumb"*/>
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" />
                            </a>
                        </div>
                    </aside>
                    <main className="col-lg-6">
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">
                                {product.category}<br />
                                {product.articulo}
                            </h4>


                            <div className="mb-3">
                                <span className="h5">${product.precio}</span>
                            </div>

                            <p>
                                Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                men.
                            </p>

                            <div className="row">
                                <dt className="col-3">Tipo:</dt>
                                <dd className="col-9">Regular</dd>

                                <dt className="col-3">Color:</dt>
                                <dd className="col-9">Brown</dd>

                                <dt className="col-3">Material:</dt>
                                <dd className="col-9">Cotton, Jeans</dd>

                                <dt className="col-3">Marca:</dt>
                                <dd className="col-9">{product.marca}</dd>
                            </div>

                            <hr />

                            <div className="row mb-4">
                                <div className="col-md-4 col-6 mb-3">
                                    <label className="mb-2 d-block">Cantidad</label>
                                    <div className="input-group mb-3"
                                        style={{ width: 170, height: 35 }}
                                    >
                                        <button onClick={handleSubstractCounter} className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                            <i className="fas fa-minus">-</i>
                                        </button>
                                        <span className="form-control text-center border border-secondary">{productCounter}</span>
                                        <button onClick={handleAddCounter} className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                            <i className="fas fa-plus">+</i>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <a href="#" className="mx-2 btn btn-warning shadow-0"> Buy now </a>
                            <a href="#" className="mx-2 btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

                        </div>
                    </main>
                </div>
            </div>
        </section>
    </>
    )
}
