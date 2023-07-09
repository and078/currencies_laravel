<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Components\CurrentCurrFetcher;
use PHPUnit\Framework\MockObject\MockObject;
use App\Components\DateCalculator;
use App\Components\FetchDataClient;
use App\Services\Factories\FetchDataClientFactory;
use Exception;
use Symfony\Component\HttpKernel\Log\Logger;
use GuzzleHttp\Client;
use Psr\Http\Message\ResponseInterface;

/**
 *
 */
class CurrentCurrFetcherTest extends TestCase
{
    private CurrentCurrFetcher $testedFetcher;
    private FetchDataClientFactory&MockObject $fetchDataClientFactoryMock;
    private DateCalculator&MockObject $dateCalculatorMock;
    private Logger&MockObject $loggerMock;


    /**
     *
     */
    protected function setUp(): void
    {
        $this->testedFetcher = new CurrentCurrFetcher(
            $this->fetchDataClientFactoryMock = $this->createMock(FetchDataClientFactory::class),
            $this->dateCalculatorMock = $this->createMock(DateCalculator::class),
            $this->loggerMock = $this->createMock(Logger::class),
        );
    }


    /**
     *
     */
    public function testsSuccessfullFetchData(): void
    {
        /** @var FetchDataClient&MockObkect $fetcherMock */
        $fetchDataClientMock = $this->createMock(FetchDataClient::class);

        $this->fetchDataClientFactoryMock->expects(self::once())
            ->method('create')
            ->willReturn($fetchDataClientMock);

        $fetchDataClientMock->expects(self::once())
            ->method('getClient')
            ->willReturn($clientMock = $this->createMock(Client::class));

        // $clientMock->expects(self::once())
        //     ->method('request')
        //     ->willReturn($result = new ResponseInterface());

        $this->assertEquals([], $this->testedFetcher->fetchData());
    }

    /**
     * Tests failed fetchData method
     */
    public function testsFailedFetchData(): void
    {
        $this->expectException(Exception::class);
        $this->expectExceptionMessage('Fetching API Currency data failed');

        /** @var FetchDataClient&MockObkect $fetcherMock */
        $fetchDataClientMock = $this->createMock(FetchDataClient::class);

        $this->fetchDataClientFactoryMock->expects(self::once())
            ->method('create')
            ->willReturn($fetchDataClientMock);

        $fetchDataClientMock->expects(self::once())
            ->method('getClient')
            ->willReturn($clientMock = $this->createMock(Client::class));

        $clientMock->expects(self::once())
            ->method('request')
            ->willThrowException($exception = new Exception('Fetching API Currency data failed'));

        $this->testedFetcher->fetchData();
    }
}
