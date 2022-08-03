
//object entries
const data = {
    frontend:'Andres',
    backend:'Marcela',
    design:'Jaime'
};

const entries = Object.entries(data);
console.log(entries);
// se puede utilizar otras opciones
console.log(entries.length);


const data = {
    frontend:'Andres',
    backend:'Marcela',
    design:'Jaime'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);



const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'---------'));
console.log('food'.padEnd(12,'  -------'));


const obj = {
    name:''
}