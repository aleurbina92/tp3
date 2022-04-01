//declaracion de variables
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let base: number;
let number: number;
let altura: number;

//resto del codigo
btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código, se ejecuta al hacer click en el boton enviar
  rotulo1.innerHTML = "dato"; //cambiamos el texto del rotulo
  base = Number(dato1.value);
  rotulo2.innerHTML = "dato"; //cambiamos el texto del rotulo
  altura = Number(dato2.value);
  console.log("el area del rectangulo es", base * altura);
});
