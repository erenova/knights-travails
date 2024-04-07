let possibleMoves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function knightMoves(start, goal) {
  let queue = [[start]];
  let visited = new Set([start.toString()]);
  while (queue.length > 0) {
    let path = queue.shift();
    let current = path[path.length - 1];

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return path;
    }
    possibleMoves.forEach((move) => {
      let next = [current[0] + move[0], current[1] + move[1]];

      if (isPositionValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());

        queue.push([...path, next]);
      }
    });
  }

  function isPositionValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
}
console.log(knightMoves([0, 0], [3, 2]));
