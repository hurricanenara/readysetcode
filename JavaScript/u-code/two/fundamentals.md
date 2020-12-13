Most primitives (booleans, numbers, undefined, null) are constant space
Strings require O(n) space where n is the string length
Reference types are generally O(n), where n is the length (for arrays) for the number of keys (for objects)

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

Arrays
Insertion - depends
 -> insertion at beginning requires reindexing the rest of the elements
Removal - depens
 -> removal at beginning requires reindexing the rest of the elements
Searching - O(N)
Access - O(1)