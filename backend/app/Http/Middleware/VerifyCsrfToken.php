<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'http://127.0.0.1:8876/api/admin/search_user_by_id',
        'http://127.0.0.1:8876/api/admin/search_user',
        'http://127.0.0.1:8876/api/calculator',
        'http://127.0.0.1:8876/api/register',
        'http://127.0.0.1:8876/api/login',
        'http://127.0.0.1:8876/api/logout',
        'http://127.0.0.1:8876/api/test',
    ];
}
