<?php

namespace App\Components;

use GuzzleHttp\Client;

class FetchDataClient
{
    public $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://point.md/curs/methods/money/newrates/',
            'timeuot' => 2.0,
            'verify' => false,
        ]);
    }
}
