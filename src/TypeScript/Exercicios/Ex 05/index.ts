// const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ["pangolin", "aardvark", "echidna", "binturong"];
const stringAndNumbers: (string | number)[] = [1, "one", 2, "two", 3, "three"];
const allMyArrays: (number | (string | number)[])[] = [
  // sequence,
  animals,
  stringAndNumbers,
];

console.log(allMyArrays);
