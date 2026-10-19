// Adjacency Matrix.


//? 1. Undirected - Unweighted Graph.
function undirectedGraph(vertex, edges) {
    const adjMat = Array.from({ length: vertex }, () => Array(vertex).fill(0));

    // both [u, v] are integers.
    for (const [u, v] of edges) {
        // all the edges are stored in this.
        adjMat[u][v] = 1; // means an edge from u to v.
        adjMat[v][u] = 1; // means an edge from v to u.
    }

    // print the graph
    for (let i = 0; i < vertex; i++) {
        for (let j = 0; j < vertex; j++) {
            console.log('graph ready', adjMat[i][j], '\n');
        }
    }

    return adjMat;
}

// const graph = undirectedGraph(5, [
//     [0, 0],
//     [0, 2],
//     [1, 3],
//     [2, 4]
// ]);

// console.log(graph);

//? 2. Undirected - Weighted Graph. 
function undirectedWeightedGraph(vertex, edges) {
    const undirWeightGraph = Array.from({ length: vertex}, () => Array(vertex).fill(0));

    for (const [u, v, w] of edges) {
        undirWeightGraph[u][v] = w;
        undirWeightGraph[v][u] = w;
    }

    for (let i = 0; i < vertex; i++) {
        for (let j = 0; j < vertex; j++) {
            console.log('undirWeightGraph', undirWeightGraph[i][j], '\n');
        }
    }
    return undirWeightGraph;
}

// const graph = undirectedWeightedGraph(5, [
//     [0, 1, 6],
//     [0, 2, 3],
//     [1, 3, 4],
//     [2, 4, 9]
// ]);

// console.log(graph);

//? 3. Direct - Unweighted Graph
function directedUnweightedGraph(vertex, edges) {
    const dirUnweightedGraph = Array.from({ length: vertex }, () => Array(vertex).fill(0));

    for (const [u, v] of edges) {
        // means u is connected to v.
        dirUnweightedGraph[u][v] = 1;
    }
    for (let i = 0; i < edges; i++) {
        for (let j = 0; j < edges; j++) {
            console.log('directedUnweightedGraph ready', dirUnweightedGraph[i][j], '\n');
        }
    }
    return dirUnweightedGraph;
}

const graph = directedUnweightedGraph(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4]
]);

console.log(graph);

/**
 * ! Space Complexity
 * * v no. of vertex => total space => v * v => v2(square)
 * 
 * ! Time Complexity
 * * v no. of vertex => total time to iterate all => v * v => v2(square)
 */


