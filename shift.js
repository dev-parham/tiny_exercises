// Shift the all elements of an array to the left and then select the first element as the last one
function leftShift(array) {
  let temp = array[0];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = temp;
  return array;
}
