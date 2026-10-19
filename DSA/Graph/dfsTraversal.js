function dfsTraversal(adj, visited, ans) {
    visited[node] = 1;
    ans.push(node);

    for (let j = 0; j < dj[node].length; j++) {
        if (!visited[adj[node][j]]) {
            // call dfs
            dfsTraversal(adj[node][j], adj, visited, ans);
        }
    }
};

// Time Complexity = O(v + e)
// Space Complexity = O(v)



const GFG_Problem = 'https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1';

function adjList(adj) {
    let v = adj.length;
    let visited = Array(v).fill(false);
    let ans = [];

    const dfsHelper = (node) => {
        visited[node] = true;
        ans.push(node);

        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfsHelper(neighbor);
            }n
        }
    };

    dfsHelper(0);

    return ans;
}