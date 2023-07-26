const details = {
  name: "john",
  age: 24,
  company: "microsoft",
  language: "en-US",
};

for (const property in details)
  console.log(`${property}: ${details[property]}`);

Object.keys(details).map((key) => console.log(key));
Object.values(details).map((value) => console.log(value));
// Returns array of keys and values respectively

console.log(typeof []);
