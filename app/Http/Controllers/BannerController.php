<?php

namespace App\Http\Controllers;

use App\Models\Banners;
 use Inertia\Inertia;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banners::all()->map(function ($banner) {
            // Get the URL of the first media item in the 'banners' collection
            $banner->photo = $banner->getMedia('banners')->first() ? $banner->getMedia('banners')->first()->getUrl() : null;
            return $banner;
        });
            // $banners = Banners::all();
            return Inertia::render('Home', [
                'banners' => $banners->toArray(), 
            ]);    }
    
   
}