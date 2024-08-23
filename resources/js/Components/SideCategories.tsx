import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CategoryItem from "./SideCategoryItem";
import subcategories from "../assets/js/subcategory";

const SideCategories: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const toggleAccordion = (index: number) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="sidebar-category">
            <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
                <button className="sidebar-close-btn" onClick={toggleMenu}>
                    <IoCloseOutline />
                </button>
            </div>

            <ul className="sidebar-menu-category-list">
                {subcategories.map((category: any, index: any) => (
                    <CategoryItem
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        subcategories={category.subcategories}
                        isActive={activeAccordion === index}
                        onClick={() => toggleAccordion(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SideCategories;
