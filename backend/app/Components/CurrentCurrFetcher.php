<?php

namespace App\Components;

use App\Components\DateCalculator;
use App\Components\FetchDataClient;
use App\Services\Factories\FetchDataClientFactory;
use Exception;
use Symfony\Component\HttpKernel\Log\Logger;

class CurrentCurrFetcher
{
    public function __construct(
        private readonly FetchDataClientFactory $fetcherFactory,
        private readonly DateCalculator $dateCalculator,
        private readonly Logger $logger,
    ) {
    }

    /**
     * Fetches data from Api
     *
     * @throws Exception
     */
    public function fetchData(): array
    {
        $start = $this->dateCalculator->getWeekAgoTime();
        $stop = $this->dateCalculator->getToday();

        $fetcher = $this->fetcherFactory->create();

        $result = $fetcher->getClient()->request('GET', "?start={$start}&stop={$stop}");
        $dataFromApi = json_decode($result->getBody()->getContents(), true);

        $dataFromApiReducedArray = [];

        foreach($dataFromApi as $key => $value) {
            // Get rid of [1], try current(), end()
            $dataFromApiReducedArray[$key] = $value[6][1];
        }

        unset($dataFromApi);

        return $dataFromApiReducedArray;

    }
}
