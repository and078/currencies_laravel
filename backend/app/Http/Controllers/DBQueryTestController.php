<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calculation;

class DBQueryTestController extends Controller
{
    public  function __invoke(Request $request)
    {
        $current = $request->query('current_currency');
        $collection = Calculation::where('current_currency', $current)->get();
        return $collection->sortBy($current);
    }
}
