function disemvowel(str) {
  let texto = str;
  let nuevoStr = "";
  for (let index = 0; index < texto.length; index++) {
    if (texto[index] == "a" || texto[index] == "A") {
      nuevoStr = nuevoStr + "";
    } else if (texto[index] === "e" || texto[index] === "E") {
      nuevoStr = nuevoStr + "";
    } else if (texto[index] === "i" || texto[index] === "I") {
      nuevoStr = nuevoStr + "";
    } else if (texto[index] === "o" || texto[index] === "O") {
      nuevoStr = nuevoStr + "";
    } else if (texto[index] === "u" || texto[index] === "U") {
      nuevoStr = nuevoStr + "";
    } else {
      nuevoStr = nuevoStr + texto[index];
    }
  }
  return nuevoStr;
}
console.log(disemvowel("This website is for losers LOL!"));

//"This website is for losers LOL!";


