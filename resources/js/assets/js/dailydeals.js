import shampooImage from "@/assets/images/products/shampoo.jpg";
import jewellery1Image from "@/assets/images/products/jewellery-1.jpg";
 const products = [
    {
      id: 1,
      imageUrl: shampooImage,
      altText: "shampoo, conditioner & facewash packs",
      title: "Shampoo, Conditioner & Facewash Packs",
      description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      price: 150.00,
      originalPrice: 200.00,
      rating: 3,
      sold: 20,
      available: 40,
      countdown: {
        days: 360,
        hours: 24,
        minutes: 59,
        seconds: 0,
      },
    },
    {
      id: 2,
      imageUrl: jewellery1Image,
      altText: "Rose Gold diamonds Earring",
      title: "Rose Gold Diamonds Earring",
      description: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      price: 1990.00,
      originalPrice: 2000.00,
      rating: 3,
      sold: 15,
      available: 40,
      countdown: {
        days: 360,
        hours: 24,
        minutes: 59,
        seconds: 0,
      },
    },
  ];
  
  export default products;