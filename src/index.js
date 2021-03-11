
exports.min = function min (array) {
  if (typeof array === 'undefined' || (array.lenght === 0) ) {return 0;}
    return Math.min(...array);
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || (array.lenght === 0) ) {return 0;}
      return Math.max(...array);
  }
exports.avg = function avg (array) {
  if (typeof array === 'undefined' || (array.lenght === 0) ) {return 0;}
  let sum = 0;
    array.forEach (el => sum += el);
    return sum / array.length;
  }
