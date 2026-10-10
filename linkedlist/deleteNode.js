var deleteNode = function (node) {
    // copy the val of next node into curr node
    // now after that bypass or skip the node

    // node.next ---> node.next.next;
    let curr = node;

    while (curr.next && curr.next.next) {
        curr.val = curr.next.val;
        curr = curr.next;
    }
    curr.val = curr.next.val;

    curr.next = null;
    
};