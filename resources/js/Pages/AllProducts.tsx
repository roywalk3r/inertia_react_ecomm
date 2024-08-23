import { Link } from "@inertiajs/react";
import React from "react";

export default function AllProducts({ allProducts }: any) {
    return (
        <>
            {allProducts.map((product, key) => (
                <div key={key}>
                    <div>
                        <div className="showcase">
                            <Link
                                href={`product/${product.slug}`}
                                className="showcase-img-box"
                            >
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width="70"
                                    className="showcase-img"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href={`product/${product.slug}`}>
                                    <h4 className="showcase-title">
                                        {product.name}
                                    </h4>
                                </Link>

                                <Link href="#" className="showcase-category">
                                    {product.category}
                                </Link>

                                <div className="price-box">
                                    <p className="price">${product.price}</p>
                                    <del>${product.old_price}</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
