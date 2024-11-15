# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity is O(n^2), where n is the number of vertices in the graph.  This is because of the two for loops that iterate over each row and each column of the n X n adjacency matrix.  The runtime complexity depends only on the number of vertices since even if there is or isn't an edge, every row and column are checked, meaning edges have no affect on the number of iterations.

I recieved help from Ishita's repository and ChatGPT.  I had no clue with where to begin, so I looked at a previous student Ishita's repository, which is where I learned that I need to iterate through the number of rows and the number of columns of the adjacency matrix.  I then used ChatGPT to check my work after attempting to write the code.  At first, I didn't think to create neighborList, so ChatGPT gave me that idea.  And when I first added neighborList, I had it defined outside of the outer for loop, so ChatGPT corrected that.  And in the if statement, I originally had neighborList.push(adjMatrix[column]), but ChatGPT told me to change that to what I have now so that it isn't pushing the entire matrix column.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Runtime analysis:

The runtime complexity is O(n^2), where n is the number of vertices in the graph.  This is because all of the for loops in the code have a runtime of O(n^2), as the first for loop iterates over all n vertices of the graph and fills the matrix with n X n vertices, and the nested for loops each run n times since they also are iterating over all n vertices, resulting in the combined runtime of O(n^2).  The runtime complexity depends only on the number of vertices, as each vertex will be checked whether there's an edge or not.

I did all of the work myself except when determining how to write one line.  The line was line 8.  I was unsure if the line should be written how it is now, adjMatrix[vertex][adjList[vertex][neighbor]] = 1, or if it should be written as adjMatrix[vertex][(adjList[vertex][neighbor] - 1)] = 1, so I asked ChatGPT if the values in an adjacency list are treated as actual values or as index values, and I used its response (index values) to determine that there is no -1 necessary in the line of code.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

----------

Here is my explanation as to why the work I submitted for adjMatrix -> adjList was mostly my work.  As stated in the README of the pancake sort assignment, I understand that this is a very long explanation, but I provided this so as to show that the work is indeed mine.

I received help on this assignment from a previous student Ishita’s repository and ChatGPT.  I looked at Ishita’s repository, as I had no clue where to begin.  After skimming her code, I learned that I need to iterate through the number of rows and the number of columns of the adjacency matrix.

I then wrote this code:

function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (row = 0; row <= adjMatrix.length; row++) {
        for (column = 0; column <= adjMatrix.length; column++) {
            if (adjMatrix[row][column] == 1) {
                adjMatrix.push(adjMatrix[row][column]);    
            }
        }
    }
    
    return adjList; 
}

I gave this code to ChatGPT to check if I was on the right track or not.  I also told it that I didn’t want the answer, just guidance.  It responded, saying that I need to create a list that can store node neighbors which I can then push into adjList, creating the proper adjacency list structure.

I adjusted my code so that it looked like this:

function convertToAdjList(adjMatrix) {
    let adjList = [];
    let neighborList = [];
    for (row = 0; row < adjMatrix.length; row++) {
        for (column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] == 1) {
                neighborList.push(adjMatrix[column]);    
            }
        }
        adjList.push(neighborList);
    }
    
    return adjList;
 
}

I did the same as before; I gave my adjusted code to ChatGPT for feedback on if I was closer to the correct implementation or not.  Also, as before, I told it to not give me the answer, but guidance towards the answer.  It responded, saying that I need to move my definition of neighborList to the inside of the outer loop so that it resets for each new vertex.  It also said that I should replace neighborList.push(adjMatrix[column]) with neighborList.push(column) to store only the index of each neighbor instead of the entire column array.  After these adjustments, I came up with the code that I submitted.

For the runtime analysis, I came up with these runtimes for each line of code:

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

This led me to the conclusion that the overall runtime complexity is O(n^2).  However, I was unsure of my answer for whether the complexity depended on the number of vertices, the number of edges, or both, so I asked ChatGPT if my answer was correct.  I originally thought that it would depend on both the number of vertices and the number of edges since both for loops come into play.  ChatGPT then said that the complexity depends primarily on the number of vertices since edges don’t alter the fundamental structure of the algorithm, which is focused on iterating over every possible vertex pair. 

I believe this is a valid explanation on why the work I submitted was mostly my work.  If I remember correctly, we were told that we could look at other students’ repositories for inspiration and guidance as long as we didn’t simply copy their work and claim it as ours.  And I also believe that the questions I asked ChatGPT and the responses it gave me are similar to if I were to ask Ali the same questions.  However, I understand that in the future if I have a guess on what the answer is, I should commit it and check with you directly so that you are able to see all of the work I am doing.
