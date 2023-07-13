<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculation extends Model
{
    use HasFactory;

    protected $table = 'calculations';

    protected $fillable = [
        'current_currency',
        'usd',
        'ron',
        'rub',
        'uah',
        'gbp',
        'eur',
        'mdl',
    ];
}
