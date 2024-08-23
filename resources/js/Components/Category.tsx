import { Link } from "@inertiajs/react";
import dress from "@/assets/images/icons/dress.svg";
import coat from "@/assets/images/icons/coat.svg";
import glasses from "@/assets/images/icons/glasses.svg";
import shorts from "@/assets/images/icons/shorts.svg";
import tee from "@/assets/images/icons/tee.svg";
import jacket from "@/assets/images/icons/jacket.svg";
import hat from "@/assets/images/icons/hat.svg";
import watch from "@/assets/images/icons/watch.svg";

const categories = [
    {
        imgSrc: dress,
        altText: "dress & frock",
        title: "Dress & frock",
        amount: 53,
    },
    {
        imgSrc: coat,
        altText: "winter wear",
        title: "Winter wear",
        amount: 58,
    },
    {
        imgSrc: glasses,
        altText: "glasses & lens",
        title: "Glasses & lens",
        amount: 68,
    },
    {
        imgSrc: shorts,
        altText: "shorts & jeans",
        title: "Shorts & jeans",
        amount: 84,
    },
    {
        imgSrc: tee,
        altText: "t-shirts",
        title: "T-shirts",
        amount: 35,
    },
    {
        imgSrc: jacket,
        altText: "jacket",
        title: "Jacket",
        amount: 16,
    },
    {
        imgSrc: watch,
        altText: "watch",
        title: "Watch",
        amount: 27,
    },
    {
        imgSrc: hat,
        altText: "hat & caps",
        title: "Hat & caps",
        amount: 39,
    },
];

function Category() {
    return (
        <div className="category">
            <div className="container">
                <div className="category-item-container has-scrollbar">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item">
                            <div className="category-img-box">
                                <img
                                    src={category.imgSrc}
                                    alt={category.title}
                                    width={30}
                                />
                            </div>

                            <div className="category-content-box">
                                <div className="category-content-flex">
                                    <h3 className="category-item-title">
                                        {category.title}
                                    </h3>
                                    <p className="category-item-amount">
                                        ({category.amount})
                                    </p>
                                </div>
                                <Link href="#" className="category-btn">
                                    Show all
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
