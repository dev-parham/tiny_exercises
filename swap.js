// Classical solution
function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// ES6's solution
function swap(index1, index2, array) {
  return [array[index2], array[index1]];
}
