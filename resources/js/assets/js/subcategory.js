import dress from "@/assets/images/icons/dress.svg";
import shoes from "@/assets/images/icons/shoes.svg";
import jewelry from "@/assets/images/icons/jewelry.svg";
import perfume from "@/assets/images/icons/perfume.svg";
import cosmetics from "@/assets/images/icons/cosmetics.svg";
import glasses from "@/assets/images/icons/glasses.svg";
import bag from "@/assets/images/icons/bag.svg";

const subcategories = [
  {
    id: 1,
    title: "Clothes",
    icon: dress,
    subcategories: [
      { id: 1, name: "Shirt", stock: 300 },
      { id: 2, name: "Shorts & Jeans", stock: 60 },
      { id: 3, name: "Jacket", stock: 50 },
      { id: 4, name: "Dress & Frock", stock: 87 },
    ],
  },
  {
    id: 2,
    title: "Footwear",
    icon: shoes,
    subcategories: [
      { id: 1, name: "Sports", stock: 45 },
      { id: 2, name: "Formal", stock: 75 },
      { id: 3, name: "Casual", stock: 35 },
      { id: 4, name: "Safety Shoes", stock: 26 },
    ],
  },
  {
    id: 3,
    title: "Jewelry",
    icon: jewelry,
    subcategories: [
      { id: 1, name: "Earrings", stock: 46 },
      { id: 2, name: "Couple Rings", stock: 73 },
      { id: 3, name: "Necklace", stock: 61 },
    ],
  },
  {
    id: 4,
    title: "Perfume",
    icon: perfume,
    subcategories: [
      { id: 1, name: "Clothes Perfume", stock: 12 },
      { id: 2, name: "Deodorant", stock: 60 },
      { id: 3, name: "Body Spray", stock: 50 },
      { id: 4, name: "Dress Perfume", stock: 87 },
    ],
  },
  {
    id: 5,
    title: "Cosmetics",
    icon: cosmetics,
    subcategories: [
      { id: 1, name: "Shampoo", stock: 68 },
      { id: 2, name: "Sunscreen", stock: 46 },
      { id: 3, name: "Body Wash", stock: 79 },
      { id: 4, name: "Makeup Kit", stock: 23 },
    ],
  },
  {
    id: 6,
    title: "Glasses",
    icon: glasses,
    subcategories: [
      { id: 1, name: "Sunglasses", stock: 50 },
      { id: 2, name: "Lenses", stock: 48 },
    ],
  },
  {
    id: 7,
    title: "Bags",
    icon: bag,
    subcategories: [
      { id: 1, name: "Shopping Bag", stock: 62 },
      { id: 2, name: "Gym Backpack", stock: 35 },
      { id: 3, name: "Purse", stock: 80 },
      { id: 4, name: "Wallet", stock: 75 },
    ],
  },
];

export default subcategories;
