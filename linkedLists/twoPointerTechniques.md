# Two-Pointer Linked List Techniques

### Many common singly linked list problems can be solved by iterating with two pointers. This is sometimes known as the runner technique.

## Two Pointers Moving in Parallel

Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

In order to do this, you’ll need some way of knowing how far you are from the end of the list itself. However, in a singly linked list, there’s no easy way to iterate back through the list when you find the end.

If you want, you can try your hand at the problem directly, or we can walk through some approaches below.

## Approaches

One thing that might first come to mind is to use an array to store a representation of the linked list. While this approach results in an easy-to-read implementation, it could also use up lots of memory maintaining a dual representation of the same data. If the linked list has one million nodes, we’ll need one million pointers in an array to keep track of it! An approach like this results in an extra O(n) space being allocated.