<?php

function sayHello()
{
    echo "Hello World!";
    echo "\n";
}

sayHello();

function increaseEnthusiasm($str)
{
  return $str . "!";
}

echo increaseEnthusiasm("Google");

function repeatThreeTimes($str)
{
  return $str . $str . $str;
}

echo repeatThreeTimes("Google");
echo "\n";
echo increaseEnthusiasm(repeatThreeTimes("Google"));