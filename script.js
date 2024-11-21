 // Error 1: Sintaxis - falta de punto y coma
 let a = 5;

 let b = 10;
 
 let c=5;
 // Error 2: Referencia a variable no definida
 let result = a + b + c; // 'c' no está definida

 // Error 3: Error de tipo
 let array = [1, 2, 3, 4];
 let item = array.length; // El método toUpperCase() no está disponible para arrays
console.log(item);
console.log(result);
