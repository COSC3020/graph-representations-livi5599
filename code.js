function convertToAdjMatrix(adjList) {
    let adjMatrix = [];
    for (node = 0; node < adjList.length; node++) {
        adjMatrix.push(Array(adjList.length).fill(0));
    }
    for (vertex = 0; vertex < adjList.length; vertex++) {
        for (neighbor = 0; neighbor < adjList[vertex].length; neighbor++) {
            adjMatrix[vertex][(adjList[vertex][neighbor])] = 1;
        }
    }
    return adjMatrix;
}
