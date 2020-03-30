//https://aonecode.com/amazon-interview-questions/find-critical-nodes

var criticalNodes = (n, connections) => {
  if (!connections || n < 0) return null;

  const visited = [];
  let id = 0;
  const low = [];
  let graph = [];
  const bridges = [];
  const ids = [];
  let outEdgesCount = 0;
  const isArt = [];

  const buildGraph = () => {
    for ([u, v] of connections) {
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push(v);
      graph[v].push(u);
    }
  };

  //use dfs and low values to find bridges

  const dfs = (at, parent) => {
    visited[at] = true;
    id++;
    low[at] = id;
    ids[at] = id;

    for (let to of graph[at]) {
      //all neighbours
      if (to === parent) continue;
      if (!visited[to]) {
        dfs(to, at);
        low[at] = Math.min(low[to], low[at]);
        if (ids[at] < low[to]) {
          //art
          isArt[at] = true;
        }
        if (ids[at] == low[to]) {
          isArt[at] = true;
        }
      } else low[at] = Math.min(low[at], ids[to]);
    }
  };

  buildGraph();

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      outEdgesCount = 0;
      dfs(i, i, -1);
      isArt[i] = outEdgesCount > 1;
    }
  }

  const result = [];
  for (let i = 0; i < isArt.length; i++) {
    if (isArt[i]) {
      result.push(i);
    }
  }

  return result;
};

criticalNodes(7, [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]);
