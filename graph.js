/*
Graph traversal means visiting every vertex and edge exactly once in a well-defined order.
The most common way of tracking vertices is to mark them. Breadth First Search (BFS)
There are many ways to traverse graphs. BFS is the most commonly used approach.
*/

class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjacencyList = new Map();
  }


  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addEdge(u,v) {
    this.adjacencyList.get(u).push(v);
    this.adjacencyList.get(v).push(u);
  }

  printGraph(){

    const verticles = this.adjacencyList.keys();

    for (let x of verticles) {

      const vals = this.adjacencyList.get(x);
      let str = '';

      for (let val of vals) {
        str+=val+' ';
      };

      console.log(x+' -> '+str);
    };
  }

  // bfs(v)
	// dfs(v)
}

/*const g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();
*/


const g = new Graph(5);

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(0,1);
g.addEdge(0,4);


g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(1,4);




g.addEdge(2,3);

g.addEdge(3,4);




g.printGraph();
