<?php

// long syntax
$my_array = array(1, 2, 3, 4);
// echo count($my_array);

//short syntax
$another_array = [1, 2, 3, 4];

//printing arrays
// print_r($my_array);
/*
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)
*/

// echo implode($my_array); // will print 1234
// echo implode(', ', $my_array); // will print 1, 2, 3, 4

// $my_array[] = 5; // adds element to the end of the array
// echo implode($my_array);

// pushing and popping

// array_pop($my_array); // removes last element in array and returns removed element
array_push($my_array, 6, 7, 8); // pushes 6 7 8 to the back of array;
echo implode($my_array);

// shifting and unshifting

array_shift($my_array); // removes first element of array and returns removed element
array_unshift($my_array, 0); // adds element to beginning of array