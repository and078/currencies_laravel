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
            $table->double('usd', 50, 2);
            $table->double('ron', 50, 2);
            $table->double('rub', 50, 2);
            $table->double('uah', 50, 2);
            $table->double('gbp', 50, 2);
            $table->double('eur', 50, 2);
            $table->double('mdl', 50, 2);
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
