import { Head, Link } from "@inertiajs/react";
import { MdArrowRight, MdStar } from "react-icons/md";
import product_rt_1 from "@/assets/images/products/jacket-1.jpg";
import product_rt_2 from "@/assets/images/products/jacket-2.jpg";
import product_rt_3 from "@/assets/images/products/jacket-3.jpg";
import product_rt_4 from "@/assets/images/products/jacket-4.jpg";
import { useContext } from "react";
import Header from "@/Components/Header";
import { ShopContext } from "./Context/ShopContext";

export default function ProductPage({ product }: any) {
    // Get the addToCart function from the context
    const shopContext = useContext(ShopContext);

    if (!shopContext) {
        return null;
    }

    const { addToCart, cartItem, allProducts, getTotalCartItem } = shopContext;

    const handleAddToCart = () => {
        addToCart(product.id);
        console.log(`Product ${product.id} added to cart`);
    };

    return (
        <>
            <Header />
            <div className="max_padd_container mt-6">
                <Head title={`Anon-${product.name}`} />
                <div className="flex gap-x-0 text-gray-500 align-center text-center ">
                    <Link href="/home">Home</Link>
                    <MdArrowRight className="text-2xl" />
                    <Link href="/products">Products</Link>
                    <MdArrowRight className="text-2xl" />
                    <Link href="#" className="bold-18 h3 text-black">
                        {product.name}
                    </Link>
                </div>
                <div className="flex flex-col gap-14 xl:flex-row">
                    {/* Left Section: Product Images */}
                    <div className="flex gap-x-2 xl:flex-1 max-[786px]:flex-col-reverse">
                        <div className="flex flex-col gap-[7px] flex-wrap max-[768px]:flex-row">
                            <img
                                src={product_rt_1}
                                alt="Product Image"
                                className="max-h-[120px] border-b border-gray-300 ring-1 ring-slate-900/15 h-[105px] object-cover"
                            />
                            <img
                                src={product_rt_2}
                                alt="Product Image"
                                className="max-h-[120px] border-b border-gray-300 ring-1 ring-slate-900/15 h-[105px] object-cover"
                            />
                            <img
                                src={product_rt_3}
                                alt="Product Image"
                                className="max-h-[120px] border-b border-gray-300 ring-1 ring-slate-900/15 h-[105px] object-cover"
                            />
                            <img
                                src={product_rt_4}
                                alt="Product Image"
                                className="max-h-[120px] border-b border-gray-300 h-[105px] object-cover"
                            />
                        </div>
                        <div className="max-w-[800px] ring-1 ring-slate-900/4">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-[600px] object-cover xl:w-full"
                            />
                        </div>
                    </div>
                    {/* Right Section: Product Details */}
                    <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
                        <h1 className="text-2xl font-semibold mb-2 text-main-eerie-black">
                            {product.name}
                        </h1>
                        <div className="flex gap-x-2 text-main-sandy-brown">
                            {[...Array(5)].map((_, i) => (
                                <MdStar key={i} />
                            ))}
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <div className="text-main-salmon-pink text-lg font-semibold mb-2">
                                ${product.price}
                            </div>
                            {product.old_price && (
                                <div className="line-through text-xs text-main-spanish-gray">
                                    ${product.old_price}
                                </div>
                            )}
                        </div>
                        <p className="text-main-sonic-silver text-xs mb-4">
                            {product.description}
                        </p>

                        <div className="flex items-center mb-4">
                            <span className="mr-2 font-medium text-xs text-main-sonic-silver">
                                Color:
                            </span>
                            <div className="flex space-x-2">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Color Thumbnail"
                                    className="w-12 h-12 border border-gray-300"
                                />
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Color Thumbnail"
                                    className="w-12 h-12 border border-gray-300"
                                />
                            </div>
                        </div>

                        <div className="mb-4 flex gap-x-2">
                            <label className="block font-medium mb-1 text-xs text-main-sonic-silver">
                                Size:
                            </label>
                            <select className="border border-gray-300 rounded text-main-sonic-silver">
                                <option>Extra Large</option>
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>
                        </div>

                        <div className="flex items-center mb-4">
                            <label className="block font-medium mr-4 text-main-sonic-silver">
                                Qty:
                            </label>
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="border border-gray-300 rounded w-16 text-main-sonic-silver"
                            />
                        </div>
                        <p className="text-gray-30 mb-3">
                            <span className="medium-16 text-gray-700 text-tertiary">
                                Category:
                            </span>{" "}
                            <span className="text-gray-600">
                                {product.category_names.join(", ")}
                            </span>
                        </p>
                        <div className="flex flex-col md:flex-row gap-x-5 mb-12">
                            <button
                                onClick={handleAddToCart}
                                className="btn_dark_outline uppercase regular-14 tracking-widest mb-2"
                            >
                                Add to cart
                            </button>
                            <button className="btn_dark_rounded uppercase regular-14 tracking-widest text-main-sonic-silver bg-main-salmon-pink">
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
