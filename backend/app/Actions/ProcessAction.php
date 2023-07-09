<?php

namespace App\Actions;

use App\Components\CurrentCurrFetcher;
use Symfony\Component\HttpKernel\Log\Logger;
use Exception;

class ProcessAction
{

    /**
     * Constructor
     */
    public function __construct(
        private readonly CurrentCurrFetcher $fetcher,
        private readonly Logger $logger,
    ) {
    }

    /**
     * Handles
     */
    public function handle(array $inputData)
    {
        try {
            [
                'current_currency' => $currentCurrency,
            ] = $inputData;

            $inputNumber = floatval($currentCurrency);

            $dataFromApi = $this->fetcher->fetchData();

            $arrayToEncode = [];

            $dataFromApi['mdl'] = 1.0;


            foreach ($dataFromApi as $key => $value) {
                $arrayToEncode[$key] = round(($inputNumber * floatval($dataFromApi[$currentCurrency])) / floatval($value), 2);
            }

            return json_encode($arrayToEncode);
        } catch (Exception $exception) {
            $this->logger->log('error', $exception);
        }
    }
}
