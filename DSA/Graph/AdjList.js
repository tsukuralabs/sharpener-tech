//? Undirected Unweighted graph

function undirUnweighted(vertex, edges) {
    // Create the outer array, filled with empty inner arrays
    const adjList = Array(vertex).fill(null).map(() => []);

    // Loop through the given edge pairs
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        // push connections to adjList
        // undirected that's why push both into each other.
        adjList[u].push(v)
        adjList[v].push(u)
    }
    // print the adjList
    for (let i = 0; i < vertex; i++) {
        let neighbors = adjList[i].join(', ');
        console.log(`${i} -> ${neighbors}`);
    }
    return adjList;
}

//? Undirected Weighted Graph

function undirectedWeightedGraph(vertex, edges) {
    const adjList = Array(vertex).fill(null).map(() => []);

    // Loop through the given edge triples
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        let weight = edges[i][2];

        adjList[u].push([v, weight]);
        adjList[v].push([u, weight]);
    }
    return adjList;
}

//! Homework [weighted & unweighted -> directed graph]

const graph = [
    [0, 1, 5],
    [0, 2, 3],
    [1, 2, 2],
    [2, 3, 7]
];

console.log(undirectedWeightedGraph(4, graph));
