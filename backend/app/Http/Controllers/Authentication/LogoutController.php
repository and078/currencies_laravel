<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LogoutController extends Controller
{
    public function __invoke ()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out',
        ];
    }
}
