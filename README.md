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
