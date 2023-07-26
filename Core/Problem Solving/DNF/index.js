const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const separate = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] === 1) {
      swap(arr, left, right);
      right--;
    } else left++;
  }
  return arr;
};

console.log(separate([1, 0, 0, 0, 1, 1, 0, 1]));
