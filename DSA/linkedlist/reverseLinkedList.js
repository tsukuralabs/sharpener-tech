// og list 
// head -> a
// a -> b -> c -> d -> e -> null

// reversed
// head -> e
// e -> d -> c -> b -> a -> null

//? Dry Run

// Original list
// head -> 1
// 1 -> 2 -> 3 -> 4 -> 5 -> null


//? Step 1: Initialize
// prev = null
// curr = 1
n

//? Step 2: First Loop
// curr = 1, prev = null

// next = curr.next
// next = 2

// curr.next = prev
// 1 -> null

// prev = curr
// prev = 1

// curr = next
// curr = 2


// Current list:
// prev -> 1 -> null
// curr -> 2 -> 3 -> 4 -> 5 -> null

//? Step 3: Second Loop
// curr = 2, prev = 1

// next = curr.next
// next = 3

// curr.next = prev
// 2 -> 1 -> null

// prev = curr
// prev = 2

// curr = next
// curr = 3


// Current list:
// prev -> 2 -> 1 -> null
// curr -> 3 -> 4 -> 5 -> null


//? Step 4: Third Loop
// curr = 3, prev = 2

// next = curr.next
// next = 4

// curr.next = prev
// 3 -> 2 -> 1 -> null

// prev = curr
// prev = 3

// curr = next
// curr = 4


function reverseLinkedList(head) {
    if (head === null || head.next === null) return null;

    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}