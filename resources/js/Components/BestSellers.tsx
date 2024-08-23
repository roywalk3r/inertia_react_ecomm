import { Link } from "@inertiajs/react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import product1 from "@/assets/images/products/1.jpg";
import product2 from "@/assets/images/products/2.jpg";
import product3 from "@/assets/images/products/3.jpg";
import product4 from "@/assets/images/products/4.jpg";
export default function BestSellers() {
    return (
        <div>
            <div className="product-showcase">
                <h3 className="showcase-heading">best sellers</h3>

                <div className="showcase-wrapper">
                    <div className="showcase-container">
                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product1}
                                    alt="baby fabric shoes"
                                    width="75"
                                    height="75"
                                    className="showcase-img"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        baby fabric shoes
                                    </h4>
                                </Link>

                                <div className="showcase-rating">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>

                                <div className="price-box">
                                    <del>$5.00</del>
                                    <p className="price">$4.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product2}
                                    alt="men's hoodies t-shirt"
                                    className="showcase-img"
                                    width="75"
                                    height="75"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        men's hoodies t-shirt
                                    </h4>
                                </Link>
                                <div className="showcase-rating">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                </div>

                                <div className="price-box">
                                    <del>$17.00</del>
                                    <p className="price">$7.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product3}
                                    alt="girls t-shirt"
                                    className="showcase-img"
                                    width="75"
                                    height="75"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        girls t-shirt
                                    </h4>
                                </Link>
                                <div className="showcase-rating">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                </div>

                                <div className="price-box">
                                    <del>$5.00</del>
                                    <p className="price">$3.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <Link href="#" className="showcase-img-box">
                                <img
                                    src={product4}
                                    alt="woolen hat for men"
                                    className="showcase-img"
                                    width="75"
                                    height="75"
                                />
                            </Link>

                            <div className="showcase-content">
                                <Link href="#">
                                    <h4 className="showcase-title">
                                        woolen hat for men
                                    </h4>
                                </Link>
                                <div className="showcase-rating">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarOutline />
                                    <IoStarOutline />
                                </div>

                                <div className="price-box">
                                    <del>$15.00</del>
                                    <p className="price">$12.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
