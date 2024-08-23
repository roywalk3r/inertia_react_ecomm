import { Link } from "@inertiajs/react";
import { BannerProps } from "@/types";
import React from "react";

const Hero = ({ banners }: BannerProps) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="slider-container has-scrollbar">
                    {banners.map((banner) => (
                        <div key={banner.id} className="slider-item">
                            <img
                                src={
                                    banner.photo
                                       
                                }
                                alt={banner.title}
                                className="banner-img"
                            />

                            <div className="banner-content">
                                <p className="banner-subtitle">
                                    {banner.description}
                                </p>

                                <h2 className="banner-title">{banner.title}</h2>

                                <p className="banner-text">
                                    {banner.starting_at}
                                </p>

                                <Link href={banner.slug} className="banner-btn">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Hero;
