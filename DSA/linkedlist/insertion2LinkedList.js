//? merging 2 sorted list

// example1: 10 -> 20 -> 30 -> 40. -> 50 -> 60 -> 70 -> 80 -> 90 -> 100 -> null;.

// list1: 10 -> 30 -> 50 -> 70 -> 90 -> null.
// list2: 20 -> 40 -> 60 -> 80 -> 100 -> null.

var getIntersectionNode = function (headA, headB) {

    if (headA === null) return headB;
    if (headB === null) return headA;

    let list1 = headA;
    let list2 = headB;

    while (list1 !== list2) {
        list1 = list1 === null ? headB : list1.next;
        list2 = list2 === null ? headA : list2.next;
    }
    return list1;
};


