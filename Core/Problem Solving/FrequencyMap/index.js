const frequency = (value) => {
  let obj = {};
  for (let val of value) {
    if (!obj[val]) obj[val] = 1;
    else obj[val]++;
  }
  return obj;
};

const uniqueKeys = (arrayOfDuplicateValues) => {
  const nonDuplicateValues = {};
  for (const property of arrayOfDuplicateValues)
    if (!nonDuplicateValues[property]) nonDuplicateValues[property] = true;
  return nonDuplicateValues;
};

console.log(uniqueKeys(["a", "b", "c", "d", "b", "c", "g", "e"]));

console.log(frequency("javascript"));
