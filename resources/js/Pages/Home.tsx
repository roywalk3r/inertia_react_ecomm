import Category from "@/Components/Category";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import ProductContainer from "@/Components/ProductContainer";
import { Head } from "@inertiajs/react";
import { BannerProps, ProductProps } from "@/types/index";
type HomeProps = BannerProps & ProductProps;

export default function Home({ banners, products }: HomeProps) {
    // console.log(products);

    return (
        <>
            <Head title="home" />
            <Header />
            <main>
                <Hero banners={banners} />
                <Category />
                <ProductContainer products={products} />
            </main>
        </>
    );
}
