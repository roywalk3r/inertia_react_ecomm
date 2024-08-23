import {
    createContext,
    useState,
    FC,
    useMemo,
    ReactNode,
    useEffect,
} from "react";
import axios from "axios";

// Define the structure of a product
interface Product {
    imageUrl: string | undefined;
    name: string | undefined;
    price: ReactNode;
    category_names: any;
    id: number;
    new_price: number;
    // Add other product properties as needed
}

// Define the structure of the cart item
interface CartItem {
    qty: number;
    price: number;
}

// Define the structure of the context value
interface ShopContextType {
    allProducts: Product[];
    cartItem: Record<number, CartItem>;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    clearProductFromCart: (itemId: number) => void;
    clearCart: () => void;
    getTotalCartItem: () => number;
    getTotalCartAmount: () => number;
    fetchCart: () => void;
}

// Create the context with a default value of `null`
export const ShopContext = createContext<ShopContextType | null>(null);

// Define the props for the provider component
interface ShopContextProviderProps {
    children: ReactNode;
    allProducts: Product[];
}

// ShopContextProvider component
const ShopContextProvider: FC<ShopContextProviderProps> = ({
    children,
    allProducts: products,
}) => {
    const [cartItem, setCartItem] = useState<Record<number, CartItem>>({});
    // Get the total amount of the cart
    const getTotalCartAmount = () => {
        return Object.entries(cartItem).reduce((totalPrice, [key, item]) => {
            return totalPrice + item.price;
        }, 0);
    };
    // Fetch the cart from the server
    const fetchCart = async () => {
        try {
            const response = await axios.get("/cart");
            setCartItem(response.data?.cart?.items || {});
        } catch (error) {
            console.error("Failed to fetch cart:", error);
        }
    };

    useEffect(() => {
        fetchCart();
        getTotalCartAmount();
    }, [products]);

    // Add an item to the cart
    async function addToCart(itemId: number) {
        try {
            const response = await axios.post(`/cart/add/${itemId}`);
            setCartItem(response.data.cart.items);
        } catch (error) {
            console.error("Failed to add to cart:", error);
        }
    }

    // Remove an item from the cart
    const removeFromCart = async (itemId: number) => {
        try {
            const response = await axios.post(`/cart/remove/${itemId}`);
            setCartItem(response.data.cart.items);
        } catch (error) {
            console.error("Failed to remove from cart:", error);
        }
    };

    // Clear a product from the cart
    const clearProductFromCart = async (itemId: number) => {
        try {
            const response = await axios.post(`/cart/clear/${itemId}`);
            setCartItem(response.data.cart.items);
        } catch (error) {
            console.error("Failed to clear product from cart:", error);
        }
    };

    // Clear the entire cart
    const clearCart = async () => {
        try {
            const response = await axios.post("/cart/clear");
            setCartItem({});
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    };

    // Get the total number of items in the cart
    const getTotalCartItem = () => {
        return Object.values(cartItem).reduce(
            (total, item) => total + item.qty,
            0
        );
    };

    // Create the context value
    const contextValue: ShopContextType = useMemo(
        () => ({
            allProducts: products,
            cartItem,
            addToCart,
            removeFromCart,
            clearProductFromCart,
            clearCart,
            getTotalCartItem,
            getTotalCartAmount,
            fetchCart,
        }),
        [products, cartItem]
    );

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
