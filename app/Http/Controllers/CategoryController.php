<?php

namespace App\Http\Controllers;

use App\Models\Shop\Category;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch all categories with their relationships
        $categories = Category::with('children', 'parent', 'products')->get();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function show($slug)
    {
        // Find the category by slug and load related products
        $category = Category::with('products')->where('slug', $slug)->firstOrFail();

        return Inertia::render('Categories/Show', [
            'category' => $category,
            'products' => $category->products,
        ]);
    }

    public function newArrivals()
    {
        // Find the "New Arrivals" category by its slug
        $category = Category::where('slug', 'new-arrivals')->with('products.media')->firstOrFail();

         $newArrivals = $category->products->filter(function ($product) {
            // Filter products created in the last 7 days
            return $product->created_at >now()->subDays(7);
        });

        // Map the products to include media URLs
        $newArrivals = $newArrivals->map(function ($product) {
            $product->imageUrl = $product->getFirstMediaUrl('default');
            return $product;
        });

        // Return the data to the Inertia page
        return Inertia::render('Home', [
            'products' => $newArrivals->values()->toArray(),  
        ]);
    }
}