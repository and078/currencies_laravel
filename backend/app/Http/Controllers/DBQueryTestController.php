<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calculation;


class DBQueryTestController extends Controller
{
    public  function __invoke(Request $request): \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
    {
        return Calculation::all()->filter(function ($elem) {
            return ($elem->usd > 18000 && $elem->user_id == 2);
        })->values();
    }
}
