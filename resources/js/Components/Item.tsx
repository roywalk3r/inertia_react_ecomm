import { Link } from "@inertiajs/react";
import ShowcaseAction from "./ShowcaseAction";
import { IoStar, IoStarOutline } from "react-icons/io5";

type ItemProps = {
    id: number;
    defaultImg: string;
    title: string;
    hoverImg: string;
    badgeText?: string;
    badgeClass?: string;
    category: string;
    rating: number;
    price: string;
    originalPrice: string;
    slug: string;
};

export default function Item({
    id,
    defaultImg,
    title,
    hoverImg,
    badgeText,
    badgeClass,
    category,
    rating,
    price,
    originalPrice,
    slug,
}: ItemProps) {
    return (
        <div key={id} className="showcase">
            <Link href={`/product/${slug}`}>
                <div className="showcase-banner">
                    <img
                        src={defaultImg}
                        alt={title}
                        width="300"
                        className="product-img default"
                    />
                    <img
                        src={hoverImg}
                        alt={title}
                        width="300"
                        className="product-img hover"
                    />

                    {badgeText && (
                        <p className={`showcase-badge ${badgeClass}`}>
                            {badgeText}
                        </p>
                    )}

                    <ShowcaseAction />
                </div>

                <div className="showcase-content">
                    <Link href="#" className="showcase-category">
                        {category}
                    </Link>

                    <Link href="#">
                        <h3 className="showcase-title">{title}</h3>
                    </Link>

                    <div className="showcase-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                {i < Math.floor(rating) ? (
                                    <IoStar />
                                ) : (
                                    <IoStarOutline />
                                )}
                            </span>
                        ))}
                    </div>

                    <div className="price-box">
                        <p className="price">{price}</p>
                        <del>{originalPrice}</del>
                    </div>
                </div>
            </Link>
        </div>
    );
}
