//15:50pm - 16:34

const grid = [
  ["O", "O", "O", "O"],
  ["D", "O", "D", "O"],
  ["O", "O", "X", "O"],
  ["O", "D", "D", "O"]
];

var treasureIsland = grid => {
  const rows = grid.length;
  const cols = grid.length ? grid[0].length : 0;

  const steps = [[1, 0], [0, 1], [0, -1], [0, 1]];

  //start from the [0,0]
  //if grid[i][j]===T - end the Search
  // add nodes to queue, every node constains x,y and stepNumber
  // after visiting a cell mark it as D -

  const queue = [];

  const node = {
    startX: 0,
    startY: 0,
    val: grid[0][0],
    step: 0
  };

  queue.push(node);

  while (queue.length) {
    let current = queue.shift();

    if (current.val === "X") {
      console.log(current.val);
      return current.step;
    }

    let currentX = current.startX;
    let currentY = current.startY;

    for (let k = 0; k < 4; k++) {
      const xx = currentX + steps[k][0];
      const yy = currentY + steps[k][1];

      if (
        xx < 0 ||
        xx >= rows ||
        yy < 0 ||
        yy >= cols ||
        grid[xx][yy] === "D"
      ) {
        continue;
      }

      let temp = {
        startX: xx,
        startY: yy,
        val: grid[xx][yy],
        step: current.step + 1
      };

      queue.push(temp);

      grid[xx][yy] == "D";
    }
  }

  return -1;
};

console.log(treasureIsland(grid));
