
// includes

let numbers=[1,2,3,4,5,6,7,8];


if(numbers.includes(9)){
    console.log('si se encuentra el valor 7');
}else{
    console.log('no se encuentra');
}

// potenciacion


let base=4;
let exponente=4;

let result = base ** exponente;

console.log(result);


//async and await

const helloworld = () =>{
    return new Promise((resolve, reject)=>{
        (false)
        ?setTimeout(()=> resolve('hello world'),3000)
        : reject(new Error('Test Error'))
    })
};

const helloasync = async () => {
    const hello = await helloworld();

    console.log(hello);
}
helloasync();

//otra propuesta


const anotherfunction = async()=>{
    try {
        const hello = await helloworld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
};

anotherfunction();