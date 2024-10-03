<?php

namespace App\Actions;

use App\Services\CurrencyFetcher;
use App\Services\Factories\DataBaseSaverFactory;
use Symfony\Component\HttpKernel\Log\Logger;
use Illuminate\Support\Facades\Log;
use Exception;

class ProcessAction
{
    /**
     * Constructor
     */
    public function __construct(
        private readonly CurrencyFetcher $fetcher,
        private readonly DataBaseSaverFactory $dbSaverFactory,
        private readonly Logger $logger,
    )
    {
    }

    /**
     * Handles
     */
    public function handle(array $inputData)
    {
        try {
            [
                'current_currency' => $currentCurrency,
                'value' => $floatValue,
            ] = $inputData;

            $inputNumber = $floatValue;

            $dataFromApiForToday = $this->fetcher->fetchData(0);

            $arrayToEncode = [];

            $dataFromApiForToday['mdl'] = 1.0;

            foreach ($dataFromApiForToday as $key => $value) {
                $arrayToEncode[$key] = round(($inputNumber * floatval($dataFromApiForToday[$currentCurrency])) / floatval($value), 2);
            }

            $dbSaver = $this->dbSaverFactory->create($arrayToEncode, $currentCurrency);

            $dbSaver->saveToDb();
            return json_encode($arrayToEncode);

        } catch (Exception $exception) {
            $this->logger->log('error', $exception);
        }
    }
}
