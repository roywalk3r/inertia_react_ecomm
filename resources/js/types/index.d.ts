export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface Banner {
    id: number;
    title: string;
    slug: string;
    description: string;
    photo: string;
    starting_at: string;
}
export interface Product {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    originalPrice: number;
    category: string;
}
export interface ProductProps {
    products: Product[];
}
export interface BannerProps {
    banners: Banner[];
}
// src/types.ts
export interface Product {
    id: number;
    new_price: number;
}
