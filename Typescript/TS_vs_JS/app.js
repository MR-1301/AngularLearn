//here the function's parameter's type is not mentioned then it would take any type of input and return the corresponding results.
const add = (a, b) => {
  return a + b;
};

const numRes = add(3, 4);
const stringRes = add("3", "4");

console.log("numRes is", numRes);
console.log("stringRes is", stringRes);