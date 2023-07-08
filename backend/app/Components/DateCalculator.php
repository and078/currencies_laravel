<?php

namespace App\Components;

class DateCalculator
{
    private $startTime;
    private $msPerDay;
    private $msNow;

    public function __construct()
    {
        $this->startTime = 82800000;
        $this->msPerDay = 86400000;
        $this->msNow = (int)(floor(microtime(true) * 1000));
    }

    public function getToday()
    {
        return (int)(floor(($this->msNow - $this->startTime) / $this->msPerDay)) * $this->msPerDay + $this->startTime;
    }

    public function getWeekAgoTime()
    {
        return $this->getToday() - ($this->msPerDay * 6);
    }
}
