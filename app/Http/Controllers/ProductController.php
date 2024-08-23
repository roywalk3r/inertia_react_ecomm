<?php
namespace App\Http\Controllers;

use App\Models\Shop\Category;
 use App\Models\Shop\Product;
use Illuminate\Http\Request;
 use Session;
 use App\Models\Cart;
 use App\Models\Banners;
 use Inertia\Inertia;
class ProductController extends Controller
{
    public $products;

public function index(){
       $products = Product::with('media')->get();
    
    $banners = Banners::all()->map(function ($banner) {
    // Get the URL of the first media item in the 'banners' collection
    $banner->photo = $banner->getMedia('banners')->first() ? $banner->getMedia('banners')->first()->getUrl() : null;
    return $banner;
    // $allProducts = Product::with(['categories', 'media'])->get()->map(function($prod) {
    //     $prod->imageUrl = $prod->getFirstMediaUrl('product-images') ?: null;
    //     $prod->category_names = $prod->categories->pluck('name')->toArray();
    //     return $prod;
    // });

});

     return Inertia::render('Home', [
        'banners' => $banners->toArray(),
        'products'=> Category::newArrivals()->toArray(),
        // 'allProducts' => $allProducts->toArray(),

        // 'cartCount' => Cart::count(), 
        // 'cartItems' => Cart::content(), 
        
    ]); 
   }
   
public function details($id)
{
    $product = Product::findOrFail($id);
    return response()->json($product);
}
public function allProducts(Product $product)
{
      // Fetch all products for the context provider
      $allProducts = Product::with(['categories', 'media'])->get()->map(function($prod) {
        $prod->imageUrl = $prod->getFirstMediaUrl('product-images') ?: null;
        $prod->category_names = $prod->categories->pluck('name')->toArray();
        return $prod;
    });

    return Inertia::render('AllProducts', [
        'product' => $product->toArray(),
        'allProducts' => $allProducts->toArray(),
     ]);
}

public function show($slug)
{
    // Fetch the specific product by slug
    $product = Product::where('slug', $slug)
                      ->with(['categories', 'media'])
                      ->firstOrFail();

    // Add the image URL and category names to the product
    $product->imageUrl = $product->getFirstMediaUrl('product-images') ?: null;
    $product->category_names = $product->categories->pluck('name')->toArray();

    // Fetch all products for the context provider
    $allProducts = Product::with(['categories', 'media'])->get()->map(function($prod) {
        $prod->imageUrl = $prod->getFirstMediaUrl('product-images') ?: null;
        $prod->category_names = $prod->categories->pluck('name')->toArray();
        return $prod;
    });

    return Inertia::render('ProductPage', [
        'product' => $product->toArray(),
        'allProducts' => $allProducts->toArray(), 
    ]);
}
public function getAddToCart(Request $request, $id)
{
    $product = Product::find($id);
    $oldCart = Session::has('cart') ? Session::get('cart') : null;
    $cart = new Cart($oldCart);
    $cart->add($product, $product->id);

    $request->session()->put('cart', $cart);
    
    return response()->json(['cart' => $cart], 200);
}

public function getCart(Request $request)
{
    $cart = Cart::get();
 // Fetch all products for the context provider
    $allProducts = Product::with(['categories', 'media'])->get()->map(function($prod) {
        $prod->imageUrl = $prod->getFirstMediaUrl('product-images') ?: null;
        $prod->category_names = $prod->categories->pluck('name')->toArray();
        return $prod;
    });

    return $request->wantsJson() ? response()->json(['cart' => $cart, 'allProducts' => $allProducts->toArray()]) : Inertia::render('Cart', [
        'cart' => $cart,
        'allProducts' => $allProducts->toArray(), 

    ]);
}

public function removeFromCart($id)
{
    $oldCart = Session::has('cart') ? Session::get('cart') : null;
    $cart = new Cart($oldCart);

    if (isset($cart->items[$id])) {
        $cart->items[$id]['qty']--;
        $cart->items[$id]['price'] -= $cart->items[$id]['item']->price;
        $cart->totalQty--;
        $cart->totalPrice -= $cart->items[$id]['item']->price;

        if ($cart->items[$id]['qty'] <= 0) {
            unset($cart->items[$id]);
        }

        Session::put('cart', $cart);
    }

    return response()->json(['cart' => $cart], 200);
}

public function clearProductFromCart($id)
{
    $oldCart = Session::has('cart') ? Session::get('cart') : null;
    $cart = new Cart($oldCart);
    if (isset($cart->items[$id])) {
        unset($cart->items[$id]);
        Session::put('cart', $cart);
    }

    return response()->json(['cart' => $cart], 200);
}
}