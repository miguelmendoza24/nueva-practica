 const carro = {
  marca: "vento",
  llanta: "pireli",
   combustible: "nitro",
  
  }
  
  //const { combustible, llanta, marca } = carro
  
const combustible = carro.combustible
const llanta = carro.llanta;
const marca = carro.marca;
  console.log(combustible);
  console.log(llanta);
  console.log(marca);


  const frutas = ["manzana", "naranja", "banana"];

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // manzana
console.log(fruta2); // banana
console.log(fruta3); // naranja