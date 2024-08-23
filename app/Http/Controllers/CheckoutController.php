<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Cashier\Exceptions\PaymentFailure;
use Laravel\Cashier\Payment;

class CheckoutController extends Controller
{
    public function checkout(Request $request)
    {
        $user = Auth::user();
        $cart = $user->cartItems(); 

        $amount = $cart->sum(function ($item) {
            return $item->price * $item->quantity;
        });

        // Validate the payment method ID
        $paymentMethod = $request->paymentMethod;

        try {
            $payment = $user->charge($amount * 100, $paymentMethod);

            // Payment succeeded, handle order processing
            return response()->json(['status' => 'success', 'payment' => $payment]);

        } catch (PaymentFailure $e) {
            // Payment failed, return error message
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}