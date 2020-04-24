function executeGame(arr) {
  let result = [];

  array = arr.data;
  // loop through each square
  for (let i = 0; i < array.length; i++) {
    result.push([]);
    for (let j = 0; j < array[i].length; j++) {
      let count = 0;

      console.log('testing', i, j);
      // check 4 sides

      // check box to the left
      if (array[i][j - 1] !== undefined && array[i][j - 1] !== 0) {
        count++;
      }

      // check box to the right
      if (array[i][j + 1] !== undefined && array[i][j + 1] !== 0) {
        count++;
      }

      // check box to the top
      console.log('i is', i);
      if (i !== 0) {
        if (array[i - 1][j] !== undefined && array[i - 1][j] !== 0) {
          count++;
        }
      }

      // check box to the bottom
      console.log('array length', array.length);
      if (i !== array.length - 1) {
        if (array[i + 1][j] !== undefined && array[i + 1][j] !== 0) {
          count++;
        }
      }

      // check 4 corners

      // top left
      if (i !== 0) {
        if (array[i - 1][j - 1] !== undefined && array[i - 1][j - 1] !== 0) {
          count++;
        }
      }

      // top right
      if (i !== 0) {
        if (array[i - 1][j + 1] !== undefined && array[i - 1][j + 1] !== 0) {
          count++;
        }
      }

      // bottom left
      if (j !== 0 && i !== array.length - 1) {
        if (array[i + 1][j - 1] !== undefined && array[i + 1][j - 1] !== 0) {
          count++;
        }
      }

      // bottom right
      if (i !== array.length - 1) {
        if (array[i + 1][j + 1] !== undefined && array[i + 1][j + 1] !== 0) {
          count++;
        }
      }

      console.log('count is', count);
      // for live cells
      if (array[i][j] === 1) {
        console.log('LIVE BOX');
        // if counter is less than 2 or greater than 3
        if (count > 3) {
          result[i].push(0);
        } else if (count < 2) {
          result[i].push(0);
        } else {
          result[i].push(1);
        }

        // if count is 2 or
      } else {
        if (count === 3) {
          result[i].push(1);
        } else {
          result[i].push(0);
        }
      }
    }
  }
  return result;
}

// function executeGame2(arr) {
//   let result = [];

//   console.log('arr length', arr.length);

//   array = arr.data;
//   // loop through each square
//   for (let i = 0; i < array.length; i++) {
//     result.push([]);
//     for (let j = 0; j < array[i].length; j++) {
//       // actions if square is live
//       if (array[i][j] === 1) {
//         result[i].push(0);
//       } else {
//         result[i].push(1);
//       }
//     }
//   }
//   return result;
// }

module.exports = executeGame;
