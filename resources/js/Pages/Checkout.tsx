import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const cardElement = elements.getElement(CardElement);

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("/checkout", {
                paymentMethod: paymentMethod.id,
            });

            if (response.data.status === "success") {
                // Inertia.visit("/order/success");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError("An error occurred during the payment process.");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? "Processing..." : "Pay Now"}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};

const CheckoutPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default CheckoutPage;
