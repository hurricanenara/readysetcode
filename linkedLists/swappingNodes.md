Since singly linked lists only have pointers from each node to its next node, swapping two nodes in the list isn’t as easy as doing so in an array (where you have access to the indices). You not only have to find the elements, but also reset the pointers around them to maintain the integrity of the list. This means keeping track of the two nodes to be swapped as well as the nodes preceding them.

Given an input of a linked list, data1, and data2, the general steps for doing so is as follows:

Iterate through the list looking for the node that matches data1 to be swapped (node1), keeping track of the node’s previous node as you iterate (node1Prev)
Repeat step 1 looking for the node that matches data2 (giving you node2 and node2Prev)
If node1Prev is null, node1 was the head of the list, so set the list’s head to node2
Otherwise, set node1Prev‘s next node to node2
If node2Prev is null, set the list’s head to node1
Otherwise, set node2Prev‘s next node to node1
Set node1‘s next node to node2‘s next node
Set node2‘s next node to node1‘s next node