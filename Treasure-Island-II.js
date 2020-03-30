//15:50pm - 16:24

const grid = [
  ["S", "O", "O", "S", "S"],
  ["D", "O", "D", "O", "D"],
  ["O", "O", "O", "O", "O"],
  ["X", "D", "D", "O", "D"],
  ["X", "D", "D", "D", "O"]
];

var treasureIsland = grid => {
  const rows = grid.length;
  const cols = grid.length ? grid[0].length : 0;

  const steps = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const queue = [];

  //add S nodes to the queue
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "S") {
        queue.push([i, j]);
      }
    }
  }

  let count = 0;

  while (queue.length) {
    count++;
    let size = queue.length;

    while (size) {
      let current = queue.shift();

      let currentX = current[0];
      let currentY = current[1];

      for (let k = 0; k < 4; k++) {
        const xx = currentX + steps[k][0];
        const yy = currentY + steps[k][1];

        if (
          xx < 0 ||
          xx >= rows ||
          yy < 0 ||
          yy >= cols ||
          grid[xx][yy] === "D" ||
          grid[xx][yy] === "S"
        ) {
          continue;
        }

        if (grid[xx][yy] === "X") {
          return count;
        } else {
          queue.push([xx, yy]);
          // We mark it as D, so next iteration can't come.
          // In multi source BFS, if paths overlap, that means
          // there is a faster path that already visited the spot.
          grid[xx][yy] = "D";
        }
      }
      size--;
    } //inner while
  }

  return -1;
};

console.log(treasureIsland(grid));
