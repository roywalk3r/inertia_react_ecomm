import React from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Link } from "@inertiajs/react";

interface Subcategory {
    name: string;
    stock: number;
}

interface CategoryItemProps {
    title: string;
    icon: string;
    subcategories: Subcategory[];
    isActive: boolean;
    onClick: () => void;
}

const SideCategoryItem: React.FC<CategoryItemProps> = ({
    title,
    icon,
    subcategories,
    isActive,
    onClick,
}) => {
    return (
        <li className="sidebar-menu-category">
            <button
                onClick={onClick}
                className={`sidebar-accordion-menu ${isActive ? "active" : ""}`}
            >
                <div className="menu-title-flex">
                    <img
                        src={icon}
                        alt={title}
                        className="menu-title-img"
                        width={20}
                        height={20}
                    />
                    <p className="menu-title">{title}</p>
                </div>
                <div>
                    <IoAddOutline className="add-icon" />
                    <IoRemoveOutline className="remove-icon" />
                </div>
            </button>
            {isActive && (
                <ul
                    className={`sidebar-submenu-category-list transition-all duration-300 ${
                        isActive ? "active" : ""
                    }`}
                >
                    {subcategories.map((subcategory, index) => (
                        <li key={index} className="sidebar-submenu-category">
                            <Link href="#" className="sidebar-submenu-title">
                                <p className="product-name">
                                    {subcategory.name}
                                </p>
                                <data
                                    value={subcategory.stock}
                                    className="stock"
                                    title="Available Stock"
                                >
                                    {subcategory.stock}
                                </data>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SideCategoryItem;
