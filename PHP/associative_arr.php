<?php

/*
$php_array = array(
  "language" => "PHP", 
  "creator" => "Rasmus Lerdorf", 
  "year_created" => 1995, 
  "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]
);

$php_short = [
  "language" => "PHP", 
  "creator" => "Rasmus Lerdorf", 
  "year_created" => 1995, 
  "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]
];

// echo $php_short["language"];
// echo implode($php_short["filename_extensions"]);

$september_hits = ["The Sixth Sense" => 22896967,
"Stigmata" => 18309666,
"Blue Streak" => 19208806,
"Double Jeopardy" => 23162542];

// echo implode(", ", $september_hits); // prints values only

print_r($september_hits);

$my_array = ["panda"=>"very cute", "lizard"=>"cute", "cockroach"=>"not very cute"];
echo $my_array["panda"]; // Prints: very cute

$my_array["capybara"] = "cutest";
echo $my_array["capybara"]; // Prints: cutest

// removing with unset()

$nums = ["one" => 1,"two"=> 2];
 
echo implode(", ", $nums); // Prints: 1, 2
 
unset($nums["one"]);
 
echo implode(", ", $nums); // Prints: 2

// joining arrays

$number_array = [8, 3, 7];
 
$string_array = ["first element", "second element", "third element"];
 
$union_array = $number_array + $string_array; // none of the elements in $string_array will have been added to $union_array since indices are same (0 1 2)
*/

// $nara_array = [1, 2, 3];
// $nara_array["hello"] = "hi";
// $nara_array[] = "bye";

// print_r($nara_array);

/*
function f1(&$array_param)
{
$array_param[“a”] = “changed”;
}

function f2($array_param)
{
$return_arr = f1($array_param);
return $return_arr;
}

$arr1 = [“a” => “Tadpole”];
$arr2 = [“a” => “Lily”];

f1($arr1);
f2($arr2);

echo $arr1[“a”] . " " . $arr2[“a”];
*/