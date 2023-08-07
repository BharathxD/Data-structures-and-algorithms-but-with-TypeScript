// Approach 1
const unique = (arr) => {
  const resultObj = {};
  for (let i = 0; i < arr.length; i++) {
    resultObj[arr[i]] = 0;
  }
  return Object.keys(resultObj);
};

const arr = [1, 2, 3, 1, 2, 4, 4, 5];

// Approach 2
const approachTwoResult = [...new Set(arr)];
console.log(approachTwoResult);

// Approach 3
const unique2 = (arr) => {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArr.includes(arr[i])) resultArr.push(arr[i]);
  }
  return resultArr;
};

const result = unique(arr);
console.log(result);
