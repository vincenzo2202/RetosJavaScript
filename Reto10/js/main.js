// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después nos
// pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final
// mostrará la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

let Nventas = parseFloat(prompt("introduzca en número de ventas"))

let ganancias = 0;
let venta=0;


for (let i = 1; i <= Nventas; i++) {

   venta=parseFloat(prompt(`Dime tu ganancia`));
   if(i<=Nventas){
   ganancias+=venta}

}
 console.log(ganancias)

 

