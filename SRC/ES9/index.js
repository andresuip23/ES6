// operador de resposo

const obj = {
    name:'andres',
    age:12,
    country:'CO'
};


let{name, ...all} = obj;
console.log(name, all);

//fusion de objetos
const obj2 = {
    name:'andres',
    age:12
    
}

const obj3 = {
    ...obj2,
    country:'CO'
}


console.log(obj3);



// promise . finally
const helloworld=()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=>resolve ('hello world'),3000)
        : reject(new Error('test Error'))
    });
};

helloworld()
.then (response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>console.log('finalizo'))



const regexdata = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match=regexdata.exec('2018-04-20');
const year=match[1];
const month=match[2];
const dia=match[3]

console.log(year, month, dia);