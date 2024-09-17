const reverseSeq = (n) => {
  let arr = []
  for (let index = n; index >= 1; index--) {
    arr.push(index)
  }
  return arr;
};
console.log(reverseSeq(5));


//[5, 4, 3, 2, 1];

function sayHello(name) {

  return ` Hello, ${name}`
}
console.log(sayHello("pepe"));
