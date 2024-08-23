<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\sideCategory;

class SideCategories extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Clothes',
                'icon' => 'dress',
                'subcategories' => [
                    ['name' => 'Shirt', 'stock' => 300],
                    ['name' => 'Shorts & Jeans', 'stock' => 60],
                    ['name' => 'Jacket', 'stock' => 50],
                    ['name' => 'Dress & Frock', 'stock' => 87],
                ],
            ],
            [
                'name' => 'Footwear',
                'icon' => 'shoes',
                'subcategories' => [
                    ['name' => 'Sports', 'stock' => 45],
                    ['name' => 'Formal', 'stock' => 75],
                    ['name' => 'Casual', 'stock' => 35],
                    ['name' => 'Safety Shoes', 'stock' => 26],
                ],
            ],
            [
                'name' => 'Jewelry',
                'icon' => 'jewelry',
                'subcategories' => [
                    ['name' => 'Earrings', 'stock' => 46],
                    ['name' => 'Couple Rings', 'stock' => 73],
                    ['name' => 'Necklace', 'stock' => 61],
                ],
            ],
            [
                'name' => 'Perfume',
                'icon' => 'perfume',
                'subcategories' => [
                    ['name' => 'Clothes Perfume', 'stock' => 12],
                    ['name' => 'Deodorant', 'stock' => 60],
                    ['name' => 'Body Spray', 'stock' => 50],
                    ['name' => 'Dress Perfume', 'stock' => 87],
                ],
            ],
            [
                'name' => 'Cosmetics',
                'icon' => 'cosmetics',
                'subcategories' => [
                    ['name' => 'Shampoo', 'stock' => 68],
                    ['name' => 'Sunscreen', 'stock' => 46],
                    ['name' => 'Body Wash', 'stock' => 79],
                    ['name' => 'Makeup Kit', 'stock' => 23],
                ],
            ],
            [
                'name' => 'Glasses',
                'icon' => 'glasses',
                'subcategories' => [
                    ['name' => 'Sunglasses', 'stock' => 50],
                    ['name' => 'Lenses', 'stock' => 48],
                ],
            ],
            [
                'name' => 'Bags',
                'icon' => 'bag',
                'subcategories' => [
                    ['name' => 'Shopping Bag', 'stock' => 62],
                    ['name' => 'Gym Backpack', 'stock' => 35],
                    ['name' => 'Purse', 'stock' => 80],
                    ['name' => 'Wallet', 'stock' => 75],
                ],
            ],
        ];

        foreach ($categories as $categoryData) {
            $category = sideCategory::create([
                'name' => $categoryData['name'],
                'icon' => $categoryData['icon'],
            ]);

            foreach ($categoryData['subcategories'] as $subcategoryData) {
                $category->children()->create([
                    'name' => $subcategoryData['name'],
                    'stock' => $subcategoryData['stock'],
                ]);
            }
        }
    }
    }