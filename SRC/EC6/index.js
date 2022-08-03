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
//ES6
let lorem2=`hola hola 
ahora es diferente`;
// se evita el uso de \n con comillas francesas
console.log(lorem);
console.log(lorem2);

// estruturacion de elementos

let person={
    'name': `oscar`,
    'age': 32,
    'country':`CO`
}
console.log(person.name, person.age, person.country);
//ES6
let {name, age, country}= person
console.log(name, age, country);

let team1=['oscar','julian','andres'];
let team2=['valeria','isabella','camila'];

let eduaction=['david', ...team1, ...team2];
console.log(eduaction);

// let and const

{
    var globalvar="var";
}
{
    let globalet="globallet";
}
console.log(globalvar);
console.log(globallet);

//objetos mejorados

let name='oscar';
let age=23;

// es5
obj = {name:name, age:age};
// es6
obj2 = {name,age};

console.log(obj);
console.log(obj2);

// arrows function

const names=[
    {name:'Andres',age:23},
    {name:'Marcela',age:22}
]


let listofnames= names.map(function(item){
    console.log(item.name);
});


const names=[
    {name:'Andres',age:23},
    {name:'Marcela',age:22}
]

let listofnames2=names.map(item => console.log(item.name));


const names=[
    {name:'Andres',age:23},
    {name:'Marcela',age:22}
]

const listofname3=(names) => {
    console.log(name);
    console.log(age);
}

const listofnames4= name =>{
    ...
}

let num=12;
const square= num => num * num;
console.log(square);

//promesas

const hellopromise =()=>{
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey!');
        }else{
            reject('Oops');
        }
    });
}

hellopromise()
.then(response => console.log(response))
.catch(error => console.log(error))

// clases

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA= valueA;
        this.valueB= valueB;
        return this.valueA+this.valueB;
    }
    mult(valueA,valueB){
        this.valueA= valueA;
        this.valueB= valueB;
        return this.valueA*this.valueB;
    }

}

const calc= new calculator();
console.log("esto es suma:");
console.log(calc.sum(4,2));
console.log("esto es multiplicacion: ");
console.log(calc.mult(4,2));



// import y export


import{hello} from './module';

hello();


// generators


function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield ' World';
    }
};

const generatorhello= helloWorld();
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
