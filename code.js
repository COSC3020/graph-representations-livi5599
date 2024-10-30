function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (row = 0; row < adjMatrix.length; row++) {
        let neighborList = [];
        for (column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] == 1) {
                neighborList.push(column);    
            }
        }
        adjList.push(neighborList);
    }
    return adjList;
}
