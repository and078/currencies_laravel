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
        Schema::create('calculations', function (Blueprint $table) {
            $table->id();
            $table->string('current_currency');
            $table->decimal('usd', 30, 2);
            $table->decimal('ron', 30, 2);
            $table->decimal('rub', 30, 2);
            $table->decimal('uah', 30, 2);
            $table->decimal('gbp', 30, 2);
            $table->decimal('eur', 30, 2);
            $table->decimal('mdl', 30, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calculations');
    }
};
