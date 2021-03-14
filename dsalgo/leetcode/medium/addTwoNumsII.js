// https://leetcode.com/problems/add-two-numbers-ii/

// Runtime: 128 ms, faster than 91.36% of JavaScript online submissions for Add Two Numbers II.
// Memory Usage: 44.8 MB, less than 37.24% of JavaScript online submissions for Add Two Numbers II.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// dummy head to link my resulting sum of two nodes
// 

// 7  5  4  3
//    5  6  4
// 8  1   0  7
//Example:           p               p
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
                        // 3 + 4 = 7
                        // 4 + 6 = 0
                        // carry = 1

// Output: 7 -> 8 -> 0 -> 7

const addTwoNumbers = function(l1, l2) {
    const stack1 = []; // 7, 2, 4, 3
    const stack2 = []; // 5, 6, 4

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let l3 = new ListNode(0);
    while (stack1.length || stack2.length) {
        let sum = 0;
        if (stack1.length) sum += stack1.pop();
        if (stack2.length) sum += stack2.pop();
        sum += l3.val;
        l3.val = sum % 10;
        let head = new ListNode(Math.floor(sum / 10));
        head.next = l3;
        l3 = head;
    }
    return (l3.val === 0) ? l3.next : l3;
}

// slightly different solution
var addTwoNumbers = function(l1, l2) {
    var s1 = [];
    var s2 = [];

    while(l1 !== null) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 !== null) {
        s2.push(l2.val);
        l2 = l2.next;
    }

    var sum = 0;
    var list = new ListNode(0);
    while(s1.length > 0 || s2.length > 0) {
        if(s1.length > 0) sum += s1.pop();
        if(s2.length > 0) sum += s2.pop();
        list.val = sum % 10;
        sum = Math.floor(sum / 10)
        var head = new ListNode(sum);
        head.next = list;
        list = head;
    }
    return list.val === 0 ? list.next : list; 
};

const list1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2));


// const addTwoNumbers = function(l1, l2) {
//     const dummy = ListNode(0);
//     let length1 = 0; 4
//     let lenght2 = 0; 3
//     let offset = Math.abs(length1 - lenght2);

//     let slow;
//     let fast;
//     if (length1 > lenght2) {
//         slow = l2;
//         fast = l1;
//     } else {
//         slow = l1;
//         fast = l2;
//     }

    
//     // fast pointer and slow pointer, offset slow pointer by (longer list - shorter list)

//     while (l1) {
//         length1++;
//         l1 = l1.next;
//     }

//     while (l2) {
//         lenght2++;
//         l2 = l2.next;
//     }


// }



// dummy 0 -> 0 -> 7
// attaching behavior - currentSum
// tempNext = dummy.next
// dummy.next currentSum
// currentSum.next = tempNext