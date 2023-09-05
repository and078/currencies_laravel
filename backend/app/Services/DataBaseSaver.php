<?php

namespace App\Services;

use App\Models\Calculation;
use Exception;
use Symfony\Component\HttpKernel\Log\Logger;

class DataBaseSaver
{
    private array $arrayToSaveInDB;

    private Logger $logger;

    /**
     * Constructor
     */
    public  function __construct(
        private readonly array $arrayFromAPI,
        private readonly string $currentCurrency,
    )
    {
        $this->arrayToSaveInDB = array("user_id" => auth()->user()->id, "current_currency" => $this->currentCurrency) + $this->arrayFromAPI; //
        $this->logger = new Logger();
    }

    /**
     * saves data to DB
     */

    public function saveToDb (): void
    {
        try {
            Calculation::create($this->arrayToSaveInDB);
        } catch (Exception $exception) {
            $this->logger->log('error', $exception);
        }

    }
}
