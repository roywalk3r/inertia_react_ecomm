<?php

namespace App\Http\Controllers;
use App\Models\Banners as Banner;
use App\Models\Shop\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BannersController extends Controller
{
    public function index()
    {
        $banners = Banner::all();
        return Inertia::render('Components/Hero', [
            'banners' => $banners,
        ]);    }
        
  
    public function store(Request $request)
    {
        $banners = Banner::all();
     
        if ($request->hasFile('photo')) {
            $banners->addMedia($request->file('photo'))->toMediaCollection('banners');
        }
    
        return redirect()->route('/banner');
    }
}