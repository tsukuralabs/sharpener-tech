function detectCycle(V, node, parent, adj, visited) {

    visited[node] = 1; // Mark current node as visited

    for (let j = 0; j < adj[node].length; j++) {

        const neighbor = adj[node][j]; // Get the current neighbor

        if (neighbor === parent) { // Ignore the edge back to parent
            continue;
        }

        if (visited[neighbor] === 1) { // Visited neighbor means cycle
            return 1;
        }

        if (detectCycle(V, neighbor, node, adj, visited)) { // Visit neighbor
            return 1;
        }
    }

    return 0; // No cycle found
}

const gfgProb = '';

class Solution {
    isCycle(V, edges) {

        // Create adjacency list
        const adj = Array.from({ length: V }, () => []);

        // Convert edges -> adjacency list
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Array(V).fill(false);

        // DFS for every component
        for (let i = 0; i < V; i++) {

            if (!visited[i]) {

                if (detectCycle(i, -1, adj, visited)) {
                    return true;
                }
            }
        }

        return false;
    }
}
function detectCycle(node, parent, adj, visited) {

    visited[node] = true;

    for (let neighbor of adj[node]) {

        // Don't consider the edge we came from
        if (neighbor === parent) {
            continue;
        }

        // Already visited -> cycle
        if (visited[neighbor]) {
            return true;
        }

        // DFS
        if (detectCycle(neighbor, node, adj, visited)) {
            return true;
        }
    }

    return false;
}