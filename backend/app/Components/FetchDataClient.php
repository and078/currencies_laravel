<?php

namespace App\Components;

use GuzzleHttp\Client;
use App\Enums\FetchDataClientConfigEnum;

/**
 *
 */
class FetchDataClient
{
    private $client;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->client = null;
    }

    /**
     *
     */
    public function getClient(): Client
    {
        return new Client([
            'base_uri' => FetchDataClientConfigEnum::BASE_URL,
            'timeout' => FetchDataClientConfigEnum::TIMEOUT_IN_SECS,
            'verify' => FetchDataClientConfigEnum::VERIFY_STATUS_BOOL,
        ]);
    }
}
