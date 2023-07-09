<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Services\Factories\FetchDataClientFactory;
use App\Components\FetchDataClient;

class FetchDataClientFactoryTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function testsFactory(): void
    {
        $clientFactory = new FetchDataClientFactory();

        $this->assertEquals(new FetchDataClient(), $clientFactory->create());
    }
}
