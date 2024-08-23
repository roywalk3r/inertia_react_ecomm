import { Link } from "@inertiajs/react";
interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    old_price: number;
    category: string;
    slug: string;
}

interface NewArrivalsProps {
    products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
    console.log(products, "NewArivals");
    const firstHalf = products.slice(0, Math.ceil(products.length / 2));
    const secondHalf = products.slice(Math.ceil(products.length / 2));
    return (
        <div className="product-showcase">
            <h2 className="title">New Arrivals</h2>

            <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                    {firstHalf.map((product) => (
                        <Link href={`product/${product.slug}`} key={product.id}>
                            <div className="showcase">
                                <Link href="#" className="showcase-img-box">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width="70"
                                        className="showcase-img"
                                    />
                                </Link>

                                <div className="showcase-content">
                                    <Link href="#">
                                        <h4 className="showcase-title">
                                            {product.name}
                                        </h4>
                                    </Link>

                                    <Link
                                        href="#"
                                        className="showcase-category"
                                    >
                                        {product.category}
                                    </Link>

                                    <div className="price-box">
                                        <p className="price">
                                            ${product.price}
                                        </p>
                                        <del>${product.old_price}</del>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="showcase-container">
                    {secondHalf.map((product) => (
                        <Link href={`product/${product.slug}`} key={product.id}>
                            <div className="showcase">
                                <Link href="#" className="showcase-img-box">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width="70"
                                        className="showcase-img"
                                    />
                                </Link>

                                <div className="showcase-content">
                                    <Link href="#">
                                        <h4 className="showcase-title">
                                            {product.name}
                                        </h4>
                                    </Link>

                                    <Link
                                        href="#"
                                        className="showcase-category"
                                    >
                                        {product.category}
                                    </Link>

                                    <div className="price-box">
                                        <p className="price">
                                            ${product.price}
                                        </p>
                                        <del>${product.old_price}</del>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
