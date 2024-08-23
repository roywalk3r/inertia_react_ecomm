import { Link } from "@inertiajs/react";
import logo from "@/assets/images/logo/logo.svg";
import {
    IoAddOutline,
    IoBagHandleOutline,
    IoBagOutline,
    IoCaretBackOutline,
    IoCloseOutline,
    IoGridOutline,
    IoHeartOutline,
    IoHomeOutline,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoMenuOutline,
    IoPersonOutline,
    IoRemoveOutline,
    IoSearchOutline,
} from "react-icons/io5";
import { useContext, useEffect, useState } from "react";

import electronics_banner from "@/assets/images/electronics-banner-1.jpg";
import electronics_banner2 from "@/assets/images/electronics-banner-2.jpg";
import mens_banner from "@/assets/images/mens-banner.jpg";
import womens_banner from "@/assets/images/womens-banner.jpg";
import { categories, languages, currencies } from "@/Constants/categories";
import { ShopContext } from "@/Pages/Context/ShopContext";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const toggleAccordion = (index: any) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };
    const shopContext = useContext(ShopContext);

    const { getTotalCartItem, cartItem } = shopContext;
    // Local state to store total cart amount
    const [totalCartItem, setTotalCartItem] = useState(getTotalCartItem());

    // fetch total amount on mount
    useEffect(() => {
        setTotalCartItem(getTotalCartItem());
    }, [cartItem]);
    console.log(totalCartItem, "Total items");
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <ul className="header-social-container">
                        <li>
                            <Link href="#" className="social-link">
                                <IoLogoFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <IoLogoTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <IoLogoInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <IoLogoLinkedin />
                            </Link>
                        </li>
                    </ul>
                    <div className="header-alert-news">
                        <p>
                            <b>Free Shipping</b> This Week Order Over - $55
                        </p>
                    </div>
                    <div className="header-top-actions">
                        <select name="currency">
                            <option value="usd">USD $</option>
                            <option value="eur">EUR &euro;</option>
                        </select>
                        <select name="language">
                            <option value="en-US">English</option>
                            <option value="es-ES">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <Link href="#" className="header-logo">
                        <img
                            src={logo}
                            alt="Anon's logo"
                            width={120}
                            height={36}
                        />
                    </Link>
                    <div className="header-search-container">
                        <input
                            type="search"
                            name="search"
                            className="search-field"
                            placeholder="Enter your product name..."
                        />
                        <button className="search-btn">
                            <IoSearchOutline />
                        </button>
                    </div>
                    <div className="header-user-actions">
                        <button className="action-btn">
                            <IoPersonOutline />
                        </button>
                        <button className="action-btn">
                            <IoHeartOutline />
                            <span className="count">0</span>
                        </button>
                        <Link href="/cart" className="action-btn">
                            <IoBagHandleOutline />
                            <span className="count">{totalCartItem}</span>
                        </Link>
                    </div>
                </div>
            </div>

            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Home
                            </Link>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Categories
                            </Link>
                            <div className="dropdown-panel">
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Electronics</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Desktop</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Laptop</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Camera</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Tablet</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Headphone</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img
                                                src={electronics_banner}
                                                alt="headphone collection"
                                                width={250}
                                                height={119}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Men's</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Formal</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Casual</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Sports</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Jacket</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Sunglasses</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img
                                                src={mens_banner}
                                                alt="men's fashion"
                                                width={250}
                                                height={119}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Women's</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Formal</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Casual</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Perfume</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Cosmetics</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Bags</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img
                                                src={womens_banner}
                                                alt="women's fashion"
                                                width={250}
                                                height={119}
                                            />
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Accessories</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Smart Watch</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Smart TV</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Keyboard</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Mouse</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Microphone</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img
                                                src={electronics_banner2}
                                                alt="mouse collection"
                                                width={250}
                                                height={119}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Men's
                            </Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Shirt</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Shorts & Jeans</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Safety Shoes</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Wallet</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Women's
                            </Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Dress & Frock</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Earrings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Necklace</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Makeup Kit</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Jewelry
                            </Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Earrings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Couple Rings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Necklace</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Bracelets</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Perfume
                            </Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Clothes Perfume</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Deodorant</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Flower Fragrance</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Air Freshener</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Blog
                            </Link>
                        </li>

                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Hot Offers
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <>
                <div className="mobile-bottom-navigation">
                    <button className="action-btn" onClick={toggleMenu}>
                        <IoMenuOutline />
                    </button>
                    <Link href="/cart" className="action-btn">
                        <IoBagOutline />
                        <span className="count">{totalCartItem}</span>
                    </Link>
                    <button className="action-btn">
                        <IoHomeOutline />
                    </button>
                    <button className="action-btn">
                        <IoHeartOutline />
                        <span className="count">0</span>
                    </button>
                    <button className="action-btn" onClick={toggleMenu}>
                        <IoGridOutline />
                    </button>
                </div>

                <nav
                    className={`mobile-navigation-menu has-scrollbar ${
                        isMenuOpen ? "active" : ""
                    }`}
                >
                    <div className="menu-top">
                        <h2 className="menu-title">Menu</h2>
                        <button className="menu-close-btn" onClick={toggleMenu}>
                            <IoCloseOutline />
                        </button>
                    </div>
                    <ul className="mobile-menu-category-list">
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Home
                            </Link>
                        </li>
                        {categories.map((category, index) => (
                            <li className="menu-category" key={category.name}>
                                <button
                                    className="accordion-menu"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <p className="menu-title">
                                        {category.name}
                                    </p>
                                    <div>
                                        <IoAddOutline className="add-icon" />
                                        <IoRemoveOutline className="remove-icon" />
                                    </div>
                                </button>
                                <ul
                                    className={`submenu-category-list ${
                                        activeAccordion === index
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {category.items.map((subItem) => (
                                        <li
                                            className="submenu-category"
                                            key={subItem}
                                        >
                                            <Link
                                                href="#"
                                                className="submenu-title"
                                            >
                                                {subItem}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Blog
                            </Link>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">
                                Hot Offers
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-bottom">
                        <ul className="menu-category-list">
                            {["Language", "Currency"].map((category, index) => (
                                <li className="menu-category" key={category}>
                                    <button
                                        className="accordion-menu"
                                        onClick={() =>
                                            toggleAccordion(
                                                index + categories.length
                                            )
                                        }
                                    >
                                        <p className="menu-title">{category}</p>
                                        <IoCaretBackOutline className="caret-back" />
                                    </button>
                                    <ul
                                        className={`submenu-category-list ${
                                            activeAccordion ===
                                            index + categories.length
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {category === "Language" &&
                                            languages.map((option) => (
                                                <li
                                                    className="submenu-category"
                                                    key={option}
                                                >
                                                    <Link
                                                        href="#"
                                                        className="submenu-title"
                                                    >
                                                        {option}
                                                    </Link>
                                                </li>
                                            ))}
                                        {category === "Currency" &&
                                            currencies.map((option) => (
                                                <li
                                                    className="submenu-category"
                                                    key={option}
                                                >
                                                    <Link
                                                        href="#"
                                                        className="submenu-title"
                                                    >
                                                        {option}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <ul className="menu-social-container">
                            {[
                                { icon: <IoLogoFacebook />, link: "#" },
                                { icon: <IoLogoTwitter />, link: "#" },
                                { icon: <IoLogoInstagram />, link: "#" },
                                { icon: <IoLogoLinkedin />, link: "#" },
                            ].map(({ icon, link }, index) => (
                                <li key={index}>
                                    <Link href={link} className="social-link">
                                        {icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </>
        </header>
    );
}
