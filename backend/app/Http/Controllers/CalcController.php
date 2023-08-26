<?php

namespace App\Http\Controllers;

use App\Actions\ProcessAction;
use App\Http\Requests\CurrencyRequest;
use Illuminate\Support\Facades\Log;

class CalcController extends Controller
{
    public function __invoke(CurrencyRequest $request, ProcessAction $action)
    {
        return $action->handle($request->validated());
    }
}
