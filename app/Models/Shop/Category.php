<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    /**
     * @var string
     */
    protected $table = 'shop_categories';

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'is_visible' => 'boolean',
    ];

    /** @return HasMany<Category> */
    public function children(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /** @return BelongsTo<Category,self> */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /** @return BelongsToMany<Product> */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'shop_category_product', 'shop_category_id', 'shop_product_id');
    }

    
  /**
     * Get the "New Arrivals" category and its products.
     *
     * @return \Illuminate\Support\Collection
     */
    public static function newArrivals()
    {
        // Fetch the "new arrivals" category
        $category = self::where('slug', 'new-arrivals')
                        ->with(['products.media'])
                        ->first();

        if (!$category) {
            return collect(); // Return an empty collection if not found
        }

        // Filter products within the category based on a specific condition
        $newArrivals = $category->products->filter(function ($product) {
            // Filter products added within the last 7 days
            return $product->created_at >= now()->subDays(7);
        });

        // Map products to include media URLs
        return $newArrivals->map(function ($product) {
            $product->imageUrl = $product->getFirstMediaUrl('product-images') ?: null;
            $product->category = $product->categories->first()?->name;
            return $product;
        });
    }
}