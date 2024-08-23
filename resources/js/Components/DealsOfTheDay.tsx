import { Link } from "@inertiajs/react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import products from "@/assets/js/dailydeals";

export default function DealsOfTheDay() {
    return (
        <div className="product-featured">
            <h2 className="title">Deal of the Day</h2>

            <div className="showcase-wrapper has-scrollbar">
                {products.map((product) => (
                    <div key={product.id} className="showcase-container">
                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src={product.imageUrl}
                                    alt={product.altText}
                                    className="showcase-img"
                                />
                            </div>

                            <div className="showcase-content">
                                <div className="showcase-rating">
                                    {Array.from({ length: 5 }, (_, index) =>
                                        index < product.rating ? (
                                            <IoStar key={index} />
                                        ) : (
                                            <IoStarOutline key={index} />
                                        )
                                    )}
                                </div>

                                <Link href="#">
                                    <h3 className="showcase-title">
                                        {product.title}
                                    </h3>
                                </Link>

                                <p className="showcase-desc">
                                    {product.description}
                                </p>

                                <div className="price-box">
                                    <p className="price">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <del>
                                        ${product.originalPrice.toFixed(2)}
                                    </del>
                                </div>

                                <button className="add-cart-btn">
                                    Add to Cart
                                </button>

                                <div className="showcase-status">
                                    <div className="wrapper">
                                        <p>
                                            already sold: <b>{product.sold}</b>
                                        </p>
                                        <p>
                                            available:
                                            <b>{product.available}</b>
                                        </p>
                                    </div>
                                    <div className="showcase-status-bar"></div>
                                </div>

                                <div className="countdown-box">
                                    <p className="countdown-desc">
                                        Hurry Up! Offer ends in:
                                    </p>
                                    <div className="countdown">
                                        <div className="countdown-content">
                                            <p className="display-number">
                                                {product.countdown.days}
                                            </p>
                                            <p className="display-text">Days</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">
                                                {product.countdown.hours}
                                            </p>
                                            <p className="display-text">
                                                Hours
                                            </p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">
                                                {product.countdown.minutes}
                                            </p>
                                            <p className="display-text">Min</p>
                                        </div>
                                        <div className="countdown-content">
                                            <p className="display-number">
                                                {product.countdown.seconds}
                                            </p>
                                            <p className="display-text">Sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
