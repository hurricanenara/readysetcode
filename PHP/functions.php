<?php

function sayHello()
{
    echo "Hello World!";
    echo "\n";
}

// sayHello();
function increaseEnthusiasm($str)
{
  return $str . "!";
}

// echo increaseEnthusiasm("Google");
function repeatThreeTimes($str)
{
  return $str . $str . $str;
}

// echo repeatThreeTimes("Google");
// echo "\n";
// echo increaseEnthusiasm(repeatThreeTimes("Google"));

// built-in functions

$name = "nara";
$age = 100;
$paragraph = "Nara dusty rose matcha coffee spring summer fall Nara winter";

// echo gettype($name);
// echo "\n";
// echo gettype($age);
// echo "\n";
// var_dump($name);
// var_dump($age);

// String Functions

// echo strrev("Nara");
// echo "\n";
// echo strtolower("Nara");
// echo "\n";
// echo strtoupper("Nara");
// echo "\n";
// echo str_repeat("Nara", 5);
// echo "\n";


// Substring

echo substr_count($paragraph, "Nara");


// Numbers

echo abs(-10.99);
echo abs(127);
echo round(1.2);
echo round(1.5);
echo round(1298736.821763876);

// Random Numbers

