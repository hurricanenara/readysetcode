# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(self, head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    prev = None
    while head:
        temp = head
        head = head.next
        temp.next = prev
        prev = temp
    return prev

five = ListNode(5)
four = ListNode(4, five)
three = ListNode(3, four)
two = ListNode(2, three)
one = ListNode(1, two)

# reverseList(self, one)