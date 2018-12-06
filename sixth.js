const input6 = [[262, 196],[110, 109],[58, 188],[226, 339],[304, 83],[136, 356],[257, 50],[315, 148],[47, 315],[73, 130],[136, 91],[341, 169],[334, 346],[285, 248],[76, 233],[334, 64],[106, 326],[48, 207],[64, 65],[189, 183],[300, 247],[352, 279],[338, 287],[77, 277],[220, 152],[77, 295],[49, 81],[236, 294],[321, 192],[43, 234],[180, 69],[130, 122],[166, 225],[301, 290],[49, 176],[62, 156],[346, 55],[150, 138],[214, 245],[272, 241],[50, 283],[104, 70],[215, 184],[339, 318],[175, 123],[250, 100],[134, 227],[96, 197],[312, 174],[133, 237]];
const test6 = [
  [1, 1],
  [1, 6],
  [8, 3],
  [3, 4],
  [5, 5],
  [8, 9]
];

function sixth1() {
  const borders = findBorders();
  const countMap = {};

  for (let x = borders.left; x < borders.right; x++) {
    for (let y = borders.top; y < borders.bottom; y++) {
      let distance = { id: null, dist: Number.MAX_VALUE };
      input6.forEach((coord, index) => {
        if (mdistance(coord[0], coord[1], x, y) < distance.dist) {
          distance = { id: `#${index}`, dist: mdistance(coord[0], coord[1], x, y) };
        }
      });

      if (countMap[distance.id] > 0) {
        countMap[distance.id] += 1;
      } else {
        countMap[distance.id] = 1;
      }
    }
  }

  let max = 0;
  for (attr in countMap) {
    const coord = input6[attr.substr(1)];

    if (coord[0] == borders.left ||
      coord[0] == borders.right ||
      coord[1] == borders.top ||
      coord[1] == borders.bottom) {
        delete countMap[attr];
      } else {
        if (countMap[attr] > max) {
          max = countMap[attr];
        }
      }
  }

  return max;
}

function sixth2() {
  const borders = findBorders();
  let size = 0;

  for (let x = borders.left; x < borders.right; x++) {
    for (let y = borders.top; y < borders.bottom; y++) {
      let total = 0;
      input6.forEach((coord) => {
        total += mdistance(coord[0], coord[1], x, y);
      });
      if (total < 10000) {
        size++;
      }
    }
  }

  return size;
}

function mdistance(x1, y1, x2, y2) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function findBorders() {
  const borders = { left: 999, top: 999, right: 0, bottom: 0 };

  for (coord of input6) {
    if (coord[0] < borders.left) borders.left = coord[0];
    if (coord[0] > borders.right) borders.right = coord[0];
    if (coord[1] < borders.top) borders.top = coord[1];
    if (coord[1] > borders.bottom) borders.bottom = coord[1];
  }

  return borders;
}

//console.log(sixth1());
console.log(sixth2());