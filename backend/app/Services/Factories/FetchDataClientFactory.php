<?php

namespace App\Services\Factories;

use App\Services\FetchDataClient;

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
