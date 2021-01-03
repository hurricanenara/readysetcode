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

// echo substr_count($paragraph, "Nara");


// Numbers

// echo abs(-10.99);
// echo abs(127);
// echo round(1.2);
// echo round(1.5);
// echo round(1298736.821763876);

// Random Numbers

// $max = getrandmax();

// This will print out a random number between 0 and the current environment will allow as max
// echo $max;
// echo "\n";
// echo rand();

// echo rand(1, 100); // will print random number between 1 and 100, inclusive

// Reading PHP documentation

// str_pad ( string $input , int $pad_length [, string $pad_string = " " [, int $pad_type = STR_PAD_RIGHT ]] ) : string

$a = 29;
$b = "You did it!";
$c = STR_PAD_BOTH;
$d = "*~*";
echo str_pad($b, $a, $d, $c);