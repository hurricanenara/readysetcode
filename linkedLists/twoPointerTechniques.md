# Two-Pointer Linked List Techniques

### Many common singly linked list problems can be solved by iterating with two pointers. This is sometimes known as the runner technique.

## Two Pointers Moving in Parallel

Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

In order to do this, you’ll need some way of knowing how far you are from the end of the list itself. However, in a singly linked list, there’s no easy way to iterate back through the list when you find the end.

If you want, you can try your hand at the problem directly, or we can walk through some approaches below.

## Approaches

In words -->

nthLastNodePointer = null
tailPointer = linked list head
count = 0

while tail pointer exists
  move tail pointer forward
  if count >= n
    set nthLastNodePointer to head if it's still null or move it forward
  increment count

return nthLastNodePointer

<----

const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
}

One thing that might first come to mind is to use an array to store a representation of the linked list. While this approach results in an easy-to-read implementation, it could also use up lots of memory maintaining a dual representation of the same data. If the linked list has one million nodes, we’ll need one million pointers in an array to keep track of it! An approach like this results in an extra O(n) space being allocated.

# Pointers at Different Speeds

Another two-pointer technique involves sending pointers through the list at different iteration “speeds”.

Consider this problem:

Find the middle node of a linked list.

### Approaches
As before, it’s possible to find a solution by iterating through the entire list, creating an array representation, and then returning the middle index. But as before, this potentially takes up lots of extra space:

create array
while the linked list has not been fully iterated through
  push the current element onto array
  move forward one node
return array[length / 2]
Instead, we can use two pointers to move through the list. The first pointer takes two steps through the list for every one step that the second takes, so it iterates twice as fast.

fastPointer = list head
slowPointer = list head
while fastPointer is not null
  move fastPointer forward
  if the end of the list has not been reached
    move fastPointer forward again
    move slowPointer forward
return slowPointer

When the first pointer reaches the end of the list, the “slower” second pointer will be pointing to the middle element.

To visualize:

Starting State

F
S
1  2  3  4  5  6  7
First Tick

      F
   S
1  2  3  4  5  6  7
Second Tick

            F
      S
1  2  3  4  5  6  7
Third Tick

                  F
         S
1  2  3  4  5  6  7
Final Tick

                     F
         S
1  2  3  4  5  6  7  null

As long as we always move the fast pointer first and check to see that it is not null before moving it and the slow pointer again, we’ll exit iteration at the proper time and have a reference to the middle node with the slow pointer.

### Implementation

##### Instructions
Complete the findMiddle() function and return the middle node of linkedList. You can assume that the list has no cycles.

Return the right-weighted middle for even-length lists. For example, in a list of 4 elements, return the element at index 2 (which would be the element 3).

Use generateTestLinkedList(length) to generate linked lists with data from 1 -> 2 -> .. -> length to test out your function. For instance, generateTestLinkedList(4) results in 1 -> 2 -> 3 -> 4.

##### Code

const findMiddle = linkedList => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer) {
    fastPointer = fastPointer.next;
    if (fastPointer) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }
  }

  return slowPointer;
};

console.log(findMiddle(generateTestLinkedList(7)));

module.exports = findMiddle;