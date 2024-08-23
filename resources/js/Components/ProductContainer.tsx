import { Link } from "@inertiajs/react";
import SideCategories from "./SideCategories";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import TopRated from "./TopRated";
import Trending from "./Trending";
import DealsOfTheDay from "./DealsOfTheDay";
import Item from "./Item";
import showcases from "@/assets/js/productall";
export default function ProductContainer({ products }: any) {
    return (
        <>
            <div className="product-container">
                <div className="container">
                    <div className="sidebar  has-scrollbar" data-mobile-menu>
                        <SideCategories />

                        <BestSellers />
                    </div>

                    <div className="product-box">
                        {/* - PRODUCT MINIMAL */}

                        <div className="product-minimal">
                            <NewArrivals products={products} />
                            <Trending />

                            <TopRated />
                        </div>

                        {/* - PRODUCT FEATURED */}
                        <DealsOfTheDay />

                        {/* - PRODUCT GRID */}

                        <div className="product-main">
                            <h2 className="title">New Products</h2>

                            <div className="product-grid">
                                {showcases.map((item: any) => (
                                    <Item
                                        key={item.id}
                                        id={item.id}
                                        defaultImg={item.defaultImg}
                                        hoverImg={item.hoverImg}
                                        title={item.title}
                                        originalPrice={item.originalPrice}
                                        price={item.price}
                                        rating={item.rating}
                                        badgeText={item.badgeText}
                                        badgeClass={item.badgeClass}
                                        category={item.category}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
