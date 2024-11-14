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

function convertToAdjList(adjMatrix) {
    let adjList = []; //O(1)
    for (row = 0; row < adjMatrix.length; row++) { //runs n times
        let neighborList = []; //O(1)
        for (column = 0; column < adjMatrix.length; column++) { //runs n times
            if (adjMatrix[row][column] == 1) {
                neighborList.push(column); //O(1) -> O(n^2)  
            }
        }
        adjList.push(neighborList); //O(1)
    }
    return adjList; //O(1)
}
