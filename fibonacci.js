// 0,1,1,2,3,5,8,13,21,34,55,89;

const fibo = [0,1];
for(let i =2; i<= 10;i++){
    //nth = (n-1) th + (n-2) th
    //ith = (i-1) th + (i-2) th
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

/* 
let fibonacci = [0,1];
for(let i = 2; i <= 15; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci); */

/* 
function getFibonacci (number){
    let fibonacci = [0,1];
    for(let i = 2; i <= number; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}
const fiboNum = 20;
const fiboResult = getFibonacci(fiboNum);
console.log(fiboResult); */



function getFibonacci (number){
    if(typeof(number) != 'number'){
        return 'Please give a valid number';
    }
    if(number < 2){
        return 'Please enter a positive number greater than 1'
    }
    let fibonacci = [0,1];
    for(let i = 2; i <= number; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}
const fiboNum = 4;
const fiboResult = getFibonacci(fiboNum);
console.log(fiboResult);