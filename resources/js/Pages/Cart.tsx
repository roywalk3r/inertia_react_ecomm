import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./Context/ShopContext";
import { Link } from "@inertiajs/react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import Header from "@/Components/Header";

const CartPage: React.FC = ({ cart }: any) => {
    const shopContext = useContext(ShopContext);

    if (!shopContext) {
        return <div>Error: Context not found.</div>;
    }

    const {
        allProducts,
        cartItem,
        removeFromCart,
        getTotalCartAmount,
        fetchCart,
    } = shopContext;

    // Local state to store total cart amount
    const [totalCartAmount, setTotalCartAmount] = useState(
        getTotalCartAmount()
    );

    // Fetch cart data on mount
    useEffect(() => {
        fetchCart();
    }, []);
    // fetch total amount on mount
    useEffect(() => {
        setTotalCartAmount(getTotalCartAmount());
    }, [cartItem]);

    const handleRemoveFromCart = (id: number) => {
        removeFromCart(id);
        fetchCart();
        setTotalCartAmount(getTotalCartAmount());
    };

    console.log(
        allProducts,
        "CartItem",
        cartItem,
        "#cart",
        cart,
        "totalAmount",
        getTotalCartAmount()
    );

    return (
        <>
            <Header />
            <div className="max_padd_container mt-6">
                <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>
                {Object.keys(cartItem).length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-20">
                        <MdRemoveShoppingCart className="text-6xl text-gray-400 mb-4" />
                        <h2 className="text-2xl mb-4">Your cart is empty</h2>
                        <Link
                            href="/products"
                            className="px-6 py-3 bg-main-salmon-pink text-white rounded-md hover:bg-main-salmon-pink-dark transition"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <section className="lg:col-span-2">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-4">Product</th>
                                        <th className="p-4">Price</th>
                                        <th className="p-4">Quantity</th>
                                        <th className="p-4">Total</th>
                                        <th className="p-4">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(cartItem).map(
                                        ([id, item]: [string, any]) => {
                                            const product = item.item;

                                            return (
                                                <tr
                                                    key={product.id}
                                                    className="border-b hover:bg-gray-50"
                                                >
                                                    <td className="p-4 flex items-center">
                                                        <img
                                                            src={
                                                                product.imageUrl
                                                            }
                                                            alt={product.name}
                                                            className="w-16 h-16 object-cover rounded mr-4"
                                                        />
                                                        <span className="font-medium">
                                                            {product.name}
                                                        </span>
                                                    </td>
                                                    <td className="p-4">
                                                        ${product.price}
                                                    </td>
                                                    <td className="p-4">
                                                        <span>{item.qty}</span>
                                                    </td>
                                                    <td className="p-4">
                                                        ${item.price.toFixed(2)}
                                                    </td>
                                                    <td className="p-4">
                                                        <button
                                                            onClick={() =>
                                                                handleRemoveFromCart(
                                                                    product.id
                                                                )
                                                            }
                                                            className="text-red-500 hover:text-red-700 transition"
                                                        >
                                                            <TbTrash
                                                                size={20}
                                                            />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </tbody>
                            </table>
                            <div className="mt-6">
                                <Link
                                    href="/products"
                                    className="text-main-salmon-pink hover:underline"
                                >
                                    &larr; Continue Shopping
                                </Link>
                            </div>
                        </section>

                        {/* Cart Summary */}
                        <div className="bg-gray-100 p-6 rounded-md">
                            <h2 className="text-xl font-semibold mb-4">
                                Order Summary
                            </h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${totalCartAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-semibold text-lg mb-4">
                                <span>Total</span>
                                <span>${totalCartAmount.toFixed(2)}</span>
                            </div>
                            <button
                                className="w-full px-4 py-2 bg-main-salmon-pink text-white rounded-md hover:bg-main-salmon-pink-dark transition"
                                onClick={() =>
                                    alert("Proceeding to checkout...")
                                }
                            >
                                Proceed to Checkout
                            </button>

                            {/* Coupon Code */}
                            <div className="mt-6">
                                <h3 className="text-lg font-medium mb-2">
                                    Apply Coupon Code
                                </h3>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
                                    />
                                    <button className="px-4 bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400 transition">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;
