import { Link } from "@inertiajs/react";
import products from "@/assets/js/trending";
export default function Trending() {
    const firstHalf = products.slice(0, Math.ceil(products.length / 2));
    const secondHalf = products.slice(Math.ceil(products.length / 2));
    return (
        <div className="product-showcase">
            <h2 className="title">Trending</h2>

            <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                    {firstHalf.map((product) => (
                        <div className="showcase" key={product.id}>
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product.imageUrl}
                                    alt={product.altText}
                                    width="70"
                                    className="showcase-img"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        {product.title}
                                    </h4>
                                </Link>

                                <Link href="#" className="showcase-category">
                                    {product.category}
                                </Link>

                                <div className="price-box">
                                    <p className="price">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <del>
                                        ${product.originalPrice.toFixed(2)}
                                    </del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="showcase-container">
                    {secondHalf.map((product) => (
                        <div className="showcase" key={product.id}>
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product.imageUrl}
                                    alt={product.altText}
                                    width="70"
                                    className="showcase-img"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        {product.title}
                                    </h4>
                                </Link>

                                <Link href="#" className="showcase-category">
                                    {product.category}
                                </Link>

                                <div className="price-box">
                                    <p className="price">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <del>
                                        ${product.originalPrice.toFixed(2)}
                                    </del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
