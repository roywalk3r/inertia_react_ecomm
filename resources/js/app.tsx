import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ShopContextProvider from "./Pages/Context/ShopContext";
import { Product } from "@/types";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const allProducts = Array.isArray(props.initialPage.props.allProducts)
            ? props.initialPage.props.allProducts
            : [];
        console.log(allProducts);
        root.render(
            <ShopContextProvider allProducts={allProducts}>
                <App {...props} />
            </ShopContextProvider>
        );
    },
    progress: {
        color: "rgb(249 115 22)",
    },
});
