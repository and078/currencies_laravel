<?php

namespace App\Services\Factories;

use App\Components\FetchDataClient;

class FetchDataClientFactory
{
    /**
     * Creates fetcher
     */
    public function create(): FetchDataClient
    {
        return new FetchDataClient();
    }
}
