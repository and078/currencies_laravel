<?php

namespace App\Components;
/**
 *
 */
class DateCalculator
{
    private const SIX_DAYS = 6;

    private int $startTime;
    private int $msPerDay;
    private int $msNow;

    /**
     * Construct
     */
    public function __construct()
    {
        $this->startTime = 82800000;
        $this->msPerDay = 86400000;
        $this->msNow = (int)(floor(microtime(true) * 1000));
    }

    /**
     *
     */
    public function getToday(): int
    {
        return (int)(floor(($this->msNow - $this->startTime) / $this->msPerDay)) * $this->msPerDay + $this->startTime;
    }

    /**
     *
     */
    public function getWeekAgoTime(): int
    {
        return $this->getToday() - ($this->msPerDay * self::SIX_DAYS);
    }
}
