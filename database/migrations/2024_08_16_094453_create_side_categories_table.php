<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('side_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Name of the category
            $table->unsignedBigInteger('parent_id')->nullable(); // For subcategories
            $table->foreign('parent_id')->references('id')->on('side_categories')->onDelete('cascade');
            $table->integer('quantity')->default(0); // Quantity of items in this category
             $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('side_categories');
    }
};