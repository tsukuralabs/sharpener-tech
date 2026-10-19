function bfsTraversal(v, adj) {
    const queue = []; // takes space upto v
    let visited = Array(v).fill(0); // extra spaace -> takes upto v

    queue.push(0);
    visited[0] = 1;

    let ans = [];

    while (queue.length > 0) {
        let node = queue[0];

        queue.shift();

        ans.push(node);

        // Traverse all the adjacent (connected) nodes of the current node.
        for (let j = 0; j < adj[node].length; j++) {
            if (!visited[adj[node][j]]) {
                visited[adj[node][j]] = 1;

                queue.push(adj[node][j]);
            }
        }
    }
    return ans;
}


// Time Complexity => Traverse on each vertex one time & traverse all edges twicely.
// O(V + 2E) => O(V + E).

// Space Complexity
// O (V + V) => O(V).
