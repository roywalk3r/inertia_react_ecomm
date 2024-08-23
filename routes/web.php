<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BannerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
//Development
Route::get('/home', [ProductController::class, 'index'])->name('home');
//Products
Route::get('/product/{slug}', [ProductController::class, 'show'])->name('product.show');
Route::get('/products',[ProductController::class, 'allProducts'])->name('product.all');
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);
Route::get('/new-arrivals', [CategoryController::class, 'newArrivals']);
//Cart
Route::get('/cart', function(){
    return Inertia::render('CartItem');
})->name('cart.item');

Route::post('/cart/add/{id}', [ProductController::class, 'getAddToCart'])->name('cart.add');
Route::post('/cart/remove/{id}', [ProductController::class, 'removeFromCart'])->name('cart.remove');
Route::post('/cart/clear/{id}', [ProductController::class, 'clearProductFromCart'])->name('cart.clear');
Route::post('/cart/clear', [ProductController::class, 'clearCart'])->name('cart.clearall');
Route::get('/cart', [ProductController::class, 'getCart'])->name('cart');
Route::post('/checkout', [CheckoutController::class, 'checkout']);

require __DIR__.'/auth.php';