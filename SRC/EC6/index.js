// declaracion de funciones
// sin recibir parametros directamente
function new(name, age, country){
    var name= name || `oscar`;
    var edad= age || 12;
    var country=country || `Panama`;
    console.log(name, age, country);
}

// es6 recibiendo los parametros inmediatamente dentro de la declaracion

function newfunction2(name= `oscar`, age=32, country=`PNM`){
    console.log(name,age,country);
}
//prueba de un log se recibe el mismo resultado
newfunction2();
newfunction2(`andres`,23,`co`);


// templates

let hello= "hello";
let world="world";
//version antigua
let epic=hello +` `+ world;
console.log(epic);
//log inmediato sin concatenacion
let epic2=`${hello} ${world}`;
console.log(epic2);


//multilinea en los string


let lorem="quiero escribir una frase epica \n"+"otra frase epica."
let lorem2=`hola hola 
ahora es diferente`;

console.log(lorem);
console.log(lorem2);