<?php

namespace App\Http\Controllers;

use App\Actions\UserRequestsAction;
use App\Http\Requests\UserCalculationsRequest;

class RequestsController extends Controller
{
    public function __invoke(UserCalculationsRequest $request, UserRequestsAction $action)
    {
        return $action->handle($request->validated());
    }
}
