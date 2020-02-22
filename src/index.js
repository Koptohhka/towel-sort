
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let res = [];

  matrix.forEach((it) => {

    for (let i = 0; i < it.length; i++) {
      res.push(it[i]);
    }

  });

  return res;
}
