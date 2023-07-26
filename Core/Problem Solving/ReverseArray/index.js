const swap = (array, x, y) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

const reverseApproach = (array) => {
  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    swap(array, l, r);
    l++;
    r--;
  }
  return array;
};

console.log(reverseApproach([1, 2, 3, 4]));
